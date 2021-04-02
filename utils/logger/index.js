const fs = require('fs');
const path = require('path');

const {
    LOG_PATH_FLAG,
    LOG_FILE_EXT,
    LOG_FILE_ADDON,
    LOG_DIR_NAME,
    GIT_IGNORE,
    FILE_ENCODE,
    IGNORE_LOG_DIR,
} = require('./constants');
const { parseFlagsToLogString } = require('./utils');

const callbackWithErrHandle = (content) => (err) => {
    if (err) throw new Error(err);
    if (content) console.log(content);
};

class Logger {
    constructor() {
        this.filePath = '';
        this.fileName = '';
        this.logsDirName = '';
        this.moveToRootPath = ['..', '..'];
        this.logDirIsIgnored = false;
    }
    initLogging = (command, flags) => {
        this.generateLogFileName(command);
        this.checkLogDir();
        this.createLogFile(command, flags);
    }
    // ---
    createLogFile = (command, flags) => {
        const logFilePath = path.join(this.logsDirName, this.fileName);
        // ---
        const timestamp = (new Date).toISOString();
        const logFlagsString = parseFlagsToLogString(flags);
        const createTemplate = `[${timestamp}] User command = ${command}, User flags = ${logFlagsString}\n`;
        // ---
        const correctOperation = !fs.existsSync(logFilePath) ? 'write' : 'append';
        fs[`${correctOperation}File`](logFilePath, createTemplate, callbackWithErrHandle());
    }
    // ---
    generateLogFileName = (base) => {
        this.fileName = `${base}${LOG_FILE_ADDON}${LOG_FILE_EXT}`;
    }
    generateLogsDirName = () => {
        this.logsDirName = path.join(__dirname, ...this.moveToRootPath, LOG_DIR_NAME);
    }
    // ---
    checkLogDir = () => {
        this.generateLogsDirName();

        if (!fs.existsSync(this.logsDirName)) {
            fs.mkdir(this.logsDirName, callbackWithErrHandle(this.logsDirName));
        }
        this.checkLogDirIsIgnored();
    }
    checkLogDirIsIgnored = () => {
        const gitIgnorePath = path.join(__dirname, ...this.moveToRootPath, GIT_IGNORE);
        const ignoreFileExists = fs.existsSync(gitIgnorePath);
        if (ignoreFileExists) {
            this.parseIgnoreFile(gitIgnorePath, `${LOG_DIR_NAME}`);
        }
    }
    // ---
    parseIgnoreFile = (path, target) => {
        const readerStream = fs.createReadStream(path);
        readerStream.setEncoding(FILE_ENCODE);
        readerStream.on('data', (chunk) => {
            this.logDirIsIgnored = chunk.includes(target);
        });
        readerStream.on('end', () => {
            this.addLogDirToIgnore(path);
        });
    }
    addLogDirToIgnore = (ignoreFile) => {
        if (!this.logDirIsIgnored) {
            fs.appendFile(ignoreFile, IGNORE_LOG_DIR, callbackWithErrHandle('ok'));
        }
    }
    // ---
}

module.exports = {
    Logger,
};