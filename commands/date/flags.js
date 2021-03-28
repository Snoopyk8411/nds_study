const { DATE_ADD, DATE_SUB } = require('./constants');
// use pattern [fullFlag, shorthand]
const DATE_FLAGS = { date: true, d: true };
const MONTH_FLAGS = { month: true, m: true };
const YEAR_FLAGS = { year: true, y: true };
const MODIFY_FLAGS = { [DATE_ADD]: '+', [DATE_SUB]: '-' };

module.exports = {
    DATE_FLAGS,
    MONTH_FLAGS,
    YEAR_FLAGS,
    MODIFY_FLAGS,
};