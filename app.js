
const { getCommandFromArgs, getFlagsFromArgs } = require('./utils/args');
const { NO_COMMAND_FOUND } = require('./constants');

const { dateCommands, runDateCommand } = require('./commands/date');
const { miniGamesCommands, runMiniGameCommand } = require('./commands/mini-games');

const runApp = (userArguments) => {
    const currentCommand = getCommandFromArgs(userArguments);
    const currentFlags = getFlagsFromArgs(userArguments);
    if (!currentCommand) {
        console.log(NO_COMMAND_FOUND);
        return;
    }
    // ---
    if (dateCommands.includes(currentCommand)) {
        runDateCommand(currentCommand, currentFlags);
    }
    // ---
    if (miniGamesCommands.includes(currentCommand)) {
        runMiniGameCommand(currentCommand, currentFlags);
    }
    
};

module.exports = {
    runApp,
};