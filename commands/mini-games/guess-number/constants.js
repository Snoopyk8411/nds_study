const {
    STOP_WORD,
    USER_INPUT,
    BAD_NUMBER_INPUT,
} = require('../constants');
// minigames commands
const GUESS_NUM = 'guess-number';
const GAME_START_QUESTION = 'Пожалуйста, придумайте число, для старта игры';
const SUCCESS_START = 'Загадано число в диапазоне от 0 до ';
const SUCCESS_TRY = 'Отгадано число - ';
const GREATER = 'Больше';
const LESS = 'Меньше';


module.exports = {
    GUESS_NUM,
    STOP_WORD,
    GAME_START_QUESTION,
    USER_INPUT,
    SUCCESS_START,
    GREATER,
    LESS,
    BAD_NUMBER_INPUT,
    SUCCESS_TRY,
};