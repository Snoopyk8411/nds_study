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
} = require('../utils');
const singleQuiz = new SingleQuizData();

const initQuizSettings = () => {
    singleQuiz.changeMinNumberTo(1);
    singleQuiz.processInputToRange(2);
    singleQuiz.generateQuizNumber();
    console.log(SUCCESS_START);
};

const initTryGuessBehaviour = (quiz) => {
    quiz.on(USER_INPUT, (input) => {
        const { isNumber, parsedInput } = checkInputToNum(input);
        if (!isNumber) {
            console.log(BAD_NUMBER_INPUT);
            return;
        }
        // ---
        const {
            isEqual,
            quizNumber,
        } = singleQuiz.compareWithQuizNumber(parsedInput);

        if (isEqual) {
            console.log(SUCCESS_TRY, hotVariablesDict[quizNumber]);
        } else {
            console.log(FAIL_TRY, hotVariablesDict[quizNumber]);
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