const parseFlagsToLogString = (flagsObj = {}) => {
    let flagsLogString = [];
    Object.keys(flagsObj).forEach((key) => {
        flagsLogString.push(`${key}: ${flagsObj[key]}`);
    });
    return flagsLogString.length !== 0 ? flagsLogString.join(', ') : '';
};

module.exports = {
    parseFlagsToLogString,
};