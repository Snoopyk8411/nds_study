const {
    STOP_WORD,
    USER_INPUT,
    BAD_NUMBER_INPUT,
} = require('../constants');
// minigames commands
const HOT_NUM = 'heads-or-tails';
const SUCCESS_START = 'Угадай, Орел или Решка? Орел - 1, Решка - 2';
const SUCCESS_TRY = 'Верно! Это -';
const FAIL_TRY = 'Увы, неверно! Это -';

const hotVariablesDict = {
    1: 'Орёл',
    2: 'Решка',
};

module.exports = {
    HOT_NUM,
    STOP_WORD,
    USER_INPUT,
    SUCCESS_START,
    BAD_NUMBER_INPUT,
    SUCCESS_TRY,
    FAIL_TRY,
    hotVariablesDict,
};