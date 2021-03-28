const {
    guessNumberCommands,
    runGuessNumber,
} = require('./guess-number');

const miniGamesCommands = []
    .concat(guessNumberCommands);

    // ---

const runMiniGameCommand = (command, flags) => {
    const runWhenIncludes = true;

    switch (runWhenIncludes) {
        case guessNumberCommands.includes(command):
            runGuessNumber(flags);
            break;
    }
};

module.exports = {
    miniGamesCommands,
    runMiniGameCommand,
};