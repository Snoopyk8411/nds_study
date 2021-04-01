const {
    guessNumberCommands,
    runGuessNumber,
} = require('./guess-number');
const {
    headsOrTailsCommands,
    runHeadsOrTails,
} = require('./heads-or-tails');

const miniGamesCommands = []
    .concat(guessNumberCommands, headsOrTailsCommands);

    // ---

const runMiniGameCommand = (command, flags) => {
    const runWhenIncludes = true;

    switch (runWhenIncludes) {
        case guessNumberCommands.includes(command):
            runGuessNumber(flags);
            break;
        case headsOrTailsCommands.includes(command):
            runHeadsOrTails(flags);
            break;
    }
};

module.exports = {
    miniGamesCommands,
    runMiniGameCommand,
};