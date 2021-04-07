const readline = require('readline');
const { STOP_WORD } = require('./constants');
const { logger, SILENT } = require('../../utils/logger');

const createQuizInterface = () => {
    const quizInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return quizInterface;
};
// common utils
const getRandomNumber = (minValue, maxValue) => {
    let min = Math.ceil(minValue);
    let max = Math.floor(maxValue);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkInputToNum = (input) => {
    const parsedInput = parseInt(input, 10);
    const isNumber = !Number.isNaN(parsedInput);
    return { isNumber, parsedInput };
};

const checkInputOnStop = (input) => input === STOP_WORD;
// ---
class SingleQuizData {
    constructor() {
        this.numberRange = 0;
        this.minNumber = 0;
        this.quizNumber = 0;
        this.isCorrectRangeEntered = false;
    }
    changeMinNumberTo = (number) => {
        this.minNumber = number;
    }
    generateQuizNumber = (messageText) => {
        this.quizNumber = getRandomNumber(this.minNumber, this.numberRange);
        if (messageText) {
            logger.log(messageText, `${this.numberRange}`);
        }
    }
    processInputToRange = (answer) => {
        const { isNumber, parsedInput: parsedAnswer } = checkInputToNum(answer);
        if (isNumber) {
            this.isCorrectRangeEntered = true;
            this.numberRange = parsedAnswer;
        }
    }
    compareWithQuizNumber = (number) => {
        const quizNumber = this.quizNumber;
        const isEqual = number === quizNumber;
        const isGreater = !isEqual && number < quizNumber;
        const isLess = !isEqual && number > quizNumber;
        return {
            quizNumber,
            isEqual,
            isGreater,
            isLess,
        };
    }
}

module.exports = {
    createQuizInterface,
    getRandomNumber,
    checkInputToNum,
    checkInputOnStop,
    SingleQuizData,
    logger,
    SILENT,
};