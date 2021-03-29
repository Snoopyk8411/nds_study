
const { getCommandFromArgs, getFlagsFromArgs } = require('./utils/args');
const { NO_COMMAND_FOUND } = require('./constants');

const { dateCommands, runDateCommand } = require('./commands/date');
const { miniGamesCommands, runMiniGameCommand } = require('./commands/mini-games');

const runApp = (userArguments) => {
    const currentCommand = getCommandFromArgs(userArguments);
    const currentFlags = getFlagsFromArgs(userArguments);
    // ---
    const toCommandRunner = true;

    switch (toCommandRunner) {
        case dateCommands.includes(currentCommand):
            runDateCommand(currentCommand, currentFlags);
            break;
        case miniGamesCommands.includes(currentCommand):
            runMiniGameCommand(currentCommand, currentFlags);
            break;
        default:
            console.log(NO_COMMAND_FOUND);
    }
};

module.exports = {
    runApp,
};