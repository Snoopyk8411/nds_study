const {
    WEATHER_SHOW,
    WEATHER_REQ_URL,
    DEFAULT_CITY,
} = require('./constants');
const {
    handleError,
    doIfResponseSucceeded,
    parseResponseData,
    parseWeatherInfo,
    getCityFromFlags,
    logger,
    SILENT,
} = require('./utils');
const http = require('http');


const getWeatherData = (weatherUrl, callbackForData) => {
    logger.log(`Requested url: ${weatherUrl}`, SILENT);
    http
    .get(weatherUrl,
        (response) => doIfResponseSucceeded(response, parseResponseData(callbackForData)))
    .on('error', handleError);
}

const askForWeather = (flags) => {
    const city = getCityFromFlags(flags);
    const weatherUrl = `${WEATHER_REQ_URL}&query=${city}`;
    getWeatherData(weatherUrl, (weatherData) => {
        const weatherInfo = parseWeatherInfo(weatherData, flags);
        logger.log(weatherInfo);
    });
};

const runWeatherCommand = (command, flags) => {
    switch (command) {
        case WEATHER_SHOW:
            askForWeather(flags);
            break;
    }
};

// ---
const weatherCommands = [WEATHER_SHOW];
module.exports = {
    weatherCommands,
    runWeatherCommand,
};