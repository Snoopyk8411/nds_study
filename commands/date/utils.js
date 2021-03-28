const { NUMBER_TYPE } = require('./constants');
const { MODIFY_FLAGS } = require('./flags');

const YEAR = 'FullYear';
const MONTH = 'Month';
const DATE = 'Date';

const checkDateFlags = (flags = {}, modifier = '') => {
    const flagsLength = Object.keys(flags).length;

    const hasFlag = flagsLength > 0;
    const hasModifier = modifier.length !== 0;

    let isFlagValid = hasFlag && flagsLength === 1;

    if (isFlagValid && hasModifier) {
        const [flag] = Object.keys(flags);
        isFlagValid = typeof flags[flag] === NUMBER_TYPE;
    }

    return {
        hasFlag,
        isFlagValid,
    };
};

const parseDifference = (modifier, diffValue) => {
    let difference = 0;
    if (!modifier || modifier.length === 0) return difference;

    difference = Number.parseInt(`${MODIFY_FLAGS[modifier]}${diffValue}`);
    return difference;
};

const getDateFlag = (flags) => {
    const [flagName] = Object.keys(flags);
    const flagValue = flags[flagName];
    return {
        flag: flagName,
        flagValue,
    }
};

const modifyDate = (date, datePart, difference) => {
    const copiedDate = new Date(date.getTime());
    copiedDate[`set${datePart}`](copiedDate[`get${datePart}`]() + difference);
    return copiedDate;
};

const modifyOverload = ({ date, difference, part }, method) => {
    if (difference) {
        console.log(modifyDate(date, part, difference).toISOString());
    } else {
        method();
    }
};

const show = {
    fullDate: (date) => {
        console.log(date.toISOString());
    },
    year: (date, difference) => modifyOverload({date, difference, part: YEAR},
        () => {
            const year = date.getFullYear();
            console.log(year);
        }),
    month: (date, difference) => modifyOverload({date, difference, part: MONTH},
        () => {
            const month = date.getMonth() + 1;
            console.log(month);
        }),
    date: (date, difference) => modifyOverload({date, difference, part: DATE},
        () => {
            const day = date.getDate();
            console.log(day);
        }),
};

module.exports = {
    checkDateFlags,
    parseDifference,
    getDateFlag,
    show
}