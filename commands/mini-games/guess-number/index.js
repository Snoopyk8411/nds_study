const {
    GUESS_NUM,
    GAME_START_QUESTION,
    USER_INPUT,
    BAD_INPUT,
    SUCCESS_TRY,
    GREATER,
    LESS,
} = require('./constants');

const {
    createQuizInterface,
    checkInputToNum,
    SingleQuizData,
} = require('./utils');
const singleQuiz = new SingleQuizData();

const askForRange = (quiz) => {
    quiz.question(GAME_START_QUESTION, (answer) => {
        singleQuiz.processInputToRange(answer);

        if (singleQuiz.isCorrectRangeEntered) {
            singleQuiz.generateQuizNumber();
        } else {
            askForRange(quiz);
        }
    });
};

const initTryGuessBehaviour = (quiz) => {
    quiz.on(USER_INPUT, (input) => {
        const { isNumber, parsedInput } = checkInputToNum(input);
        if (!isNumber) {
            console.log(BAD_INPUT);
            return;
        }
        // ---
        const {
            isEqual,
            isGreater,
            isLess,
        } = singleQuiz.compareWithQuizNumber(parsedInput);

        if (isGreater) console.log(GREATER);
        if (isLess) console.log(LESS);
        if (isEqual) {
            console.log(SUCCESS_TRY, input);
            quiz.close();
        }
    });
};

const startNumberQuiz = (quiz) => {
    initTryGuessBehaviour(quiz);
    askForRange(quiz);
};

const runGuessNumber = () => {
    const quizImpl = createQuizInterface();
    startNumberQuiz(quizImpl);
};

// ---
const guessNumberCommands = [GUESS_NUM];
module.exports = {
    guessNumberCommands,
    runGuessNumber,
};