const readline = require('readline');
const {
    SUCCESS_START,
} = require('./constants');

const createQuizInterface = () => {
    const quizInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return quizInterface;
};

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const checkInputToNum = (input) => {
    const parsedInput = parseInt(input, 10);
    const isNumber = !Number.isNaN(parsedInput);
    return { isNumber, parsedInput };
};

class SingleQuizData {
    constructor() {
        this.numberRange = 0;
        this.quizNumber = 0;
        this.isCorrectRangeEntered = false;
    }
    generateQuizNumber = () => {
        this.quizNumber = getRandomNumber(this.numberRange);
        console.log(SUCCESS_START, `${this.numberRange}`);
    }
    processInputToRange = (answer) => {
        const { isNumber, parsedInput: parsedAnswer } = checkInputToNum(answer);
        if (isNumber) {
            this.isCorrectRangeEntered = true;
            this.numberRange = parsedAnswer;
        }
    }
    compareWithQuizNumber = (number) => {
        const quizNumber = this.quizNumber;
        const isEqual = number === quizNumber;
        const isGreater = !isEqual && number < quizNumber;
        const isLess = !isEqual && number > quizNumber;
        return {
            isEqual,
            isGreater,
            isLess,
        };
    }
}

module.exports = {
    createQuizInterface,
    getRandomNumber,
    checkInputToNum,
    SingleQuizData,
};