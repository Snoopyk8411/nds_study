
const { getCommandFromArgs, getFlagsFromArgs } = require('./utils/args');
const { logger, LOG_PROGRAM_END } = require('./utils/logger');

const { NO_COMMAND_FOUND } = require('./constants');

const { dateCommands, runDateCommand } = require('./commands/date');
const { weatherCommands, runWeatherCommand } = require('./commands/weather');
const { miniGamesCommands, runMiniGameCommand } = require('./commands/mini-games');

const runApp = (userArguments) => {
    const currentCommand = getCommandFromArgs(userArguments);
    const currentFlags = getFlagsFromArgs(userArguments);
    // ---
    logger.initLogging(currentCommand, currentFlags);
    // ---
    const toCommandRunner = true;

    switch (toCommandRunner) {
        case dateCommands.includes(currentCommand):
            runDateCommand(currentCommand, currentFlags);
            break;
        case miniGamesCommands.includes(currentCommand):
            runMiniGameCommand(currentCommand, currentFlags);
            break;
        case weatherCommands.includes(currentCommand):
            runWeatherCommand(currentCommand, currentFlags);
            break;
        default:
            logger.log(NO_COMMAND_FOUND);
    }
    logger.log(LOG_PROGRAM_END);
};

module.exports = {
    runApp,
};