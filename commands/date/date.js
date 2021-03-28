const { DATE_CURRENT, DATE_ADD, DATE_SUB } = require('./constants');
const { DATE_FLAGS, MONTH_FLAGS, YEAR_FLAGS } = require('./flags');
const {
    checkDateFlags,
    parseDifference,
    getDateFlag,
    show
} = require('./utils');

const usePartlyDateShow = (flag, differenceToCurrent) => {
    // sry for that, indeed it's strange, but funny
    const segmentToCorrectFlagCase = true;

    switch (segmentToCorrectFlagCase) {
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
};

const showDate = (flags, modifier) => {
    const { hasFlag, isFlagValid } = checkDateFlags(flags, modifier);

    const simpleShow = !hasFlag || !isFlagValid;
    if (simpleShow) {
        show.fullDate(new Date);
        return;
    }

    const { flag, flagValue } = getDateFlag(flags);
    let differenceToCurrent = parseDifference(modifier, flagValue);

    usePartlyDateShow(flag, differenceToCurrent);
};

const runDateCommand = (command, flags) => {
    switch (command) {
        case DATE_CURRENT:
            showDate(flags);
            break;
        case DATE_ADD:
            showDate(flags, DATE_ADD);
            break;
        case DATE_SUB:
            showDate(flags, DATE_SUB);
            break;
    }
};

// ---
const dateCommands = [DATE_CURRENT, DATE_ADD, DATE_SUB];
module.exports = {
    dateCommands,
    runDateCommand,
};