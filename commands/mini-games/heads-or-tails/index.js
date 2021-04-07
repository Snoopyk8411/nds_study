const {
    HOT_NUM,
    SUCCESS_START,
    USER_INPUT,
    BAD_NUMBER_INPUT,
    FAIL_TRY,
    SUCCESS_TRY,
    hotVariablesDict,
} = require('./constants');

const {
    createQuizInterface,
    checkInputToNum,
    SingleQuizData,
    logger,
    SILENT,
} = require('../utils');
const singleQuiz = new SingleQuizData();

const initQuizSettings = () => {
    singleQuiz.changeMinNumberTo(1);
    singleQuiz.processInputToRange(2);
    singleQuiz.generateQuizNumber();
    logger.log(SUCCESS_START);
};

const initTryGuessBehaviour = (quiz) => {
    quiz.on(USER_INPUT, (input) => {
        logger.log(input, SILENT);
        const { isNumber, parsedInput } = checkInputToNum(input);
        if (!isNumber) {
            logger.log(BAD_NUMBER_INPUT);
            return;
        }
        // ---
        const {
            isEqual,
            quizNumber,
        } = singleQuiz.compareWithQuizNumber(parsedInput);

        if (isEqual) {
            logger.log(SUCCESS_TRY, hotVariablesDict[quizNumber]);
        } else {
            logger.log(FAIL_TRY, hotVariablesDict[quizNumber]);
        }
        quiz.close();
    });
};

const startHeadOrTailsQuiz = (quiz) => {
    initQuizSettings();
    initTryGuessBehaviour(quiz);
};

const runHeadsOrTails = () => {
    const quizImpl = createQuizInterface();
    startHeadOrTailsQuiz(quizImpl);
};

// ---
const headsOrTailsCommands = [HOT_NUM];
module.exports = {
    headsOrTailsCommands,
    runHeadsOrTails,
};