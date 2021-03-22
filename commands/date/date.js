const { DATE_CURRENT, DATE_ADD, DATE_SUB } = require('../../constants');
const { DATE_FLAGS, MONTH_FLAGS, YEAR_FLAGS, MODIFY_FLAGS } = require('./flags');
const { checkDateFlags, show } = require('./utils');

const dateCommands = [DATE_CURRENT, DATE_ADD, DATE_SUB];

const generateDate = (flags, modifier) => {
    const { hasFlag, isFlagValid } = checkDateFlags(flags, modifier);
    let differenceToCurrent = 0;

    if (hasFlag && isFlagValid) {
        const [flag] = Object.keys(flags);

        if (modifier && modifier.length !== 0) {
            const flagValue = flags[flag];
            differenceToCurrent = Number.parseInt(`${MODIFY_FLAGS[modifier]}${flagValue}`);
        }
        // sry for that, indeed it's strange, but funny
        switch (true) {
            case DATE_FLAGS[flag]:
                show.date(new Date, differenceToCurrent);
                break;
            case MONTH_FLAGS[flag]:
                show.month(new Date, differenceToCurrent);
                break;
            case YEAR_FLAGS[flag]:
                show.year(new Date, differenceToCurrent);
                break;
        }
    } else {
        show.fullDate(new Date);
    }
}


const runDateCommand = (command, flags) => {
    switch (command) {
        case DATE_CURRENT:
            generateDate(flags);
            break;
        case DATE_ADD:
            generateDate(flags, DATE_ADD);
            break;
        case DATE_SUB:
            generateDate(flags, DATE_SUB);
            break;
    }
};
module.exports = {
    dateCommands,
    runDateCommand,
};