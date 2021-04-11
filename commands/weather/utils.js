const {
    RES_SUCCESS_CODE,
    RES_ENCODE,
    RES_CHUNKS,
    RES_END,
    DEFAULT_CITY,
} = require('./constants');
const { logger, SILENT } = require('../../utils/logger');

const handleError = (error) => {
    logger.log(`Got error: ${error.message}`);
};

const doIfResponseSucceeded = (response, callback) => {
    const statusCode = response.statusCode;
    if (statusCode !== RES_SUCCESS_CODE) {
        logger.log(`Status code: ${statusCode}`);
        return;
    }
    return callback(response);

};
const parseResponseData = (callback) => (response) => {
    response.setEncoding(RES_ENCODE);
    let rawData = '';
    response.on(RES_CHUNKS, (chunk) => rawData += chunk);
    response.on(RES_END, () => {
        logger.log(`RawData: ${rawData}`, SILENT);
        const parsedData = JSON.parse(rawData);
        callback(parsedData);
    });
};
// ---
const prettifyWeatherData = (weatherData) => {
    const {
        location: {
            name, country,
        },
        current: {
            observation_time,
            temperature,
            feelslike,
            weather_descriptions: [ weather_description ],
            wind_speed,
            wind_dir,
            pressure,
        },
    } = weatherData;
    const weatherMessage = `At ${name}, ${country} on ${observation_time} is: 
${weather_description} with temperature of ${temperature} C, but feels like: ${feelslike} C.
Wind is ${wind_speed} km/h ${wind_dir}. With a pressure: ${pressure} mb`;
    return weatherMessage;
};

const parseWeatherInfo = (weatherData, flags) => {
    const { error } = weatherData;
    const { show_pretty } = flags;
    if (error) {
        return error.info;
    }
    if (show_pretty) {
        return prettifyWeatherData(weatherData);
    }

    return weatherData;
};
const getCityFromFlags = (flags) => {
    const { city = DEFAULT_CITY } = flags;
    return city;
}

module.exports = {
    handleError,
    doIfResponseSucceeded,
    parseResponseData,
    parseWeatherInfo,
    getCityFromFlags,
    logger,
    SILENT,
};