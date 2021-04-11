const { RES_SUCCESS_CODE, FILE_ENCODE } = require('../../constants');
const RES_ENCODE = FILE_ENCODE.toLowerCase();
// response events
const RES_CHUNKS = 'data';
const RES_END = 'end';
// weather commands
const WEATHER_SHOW = 'weather';
// ---
const BASE_URL = 'http://api.weatherstack.com/';
const API_TOKEN = process.env.WS_API_KEY;
const WEATHER_REQ_URL = `${BASE_URL}/current?access_key=${API_TOKEN}`;
// ---
const DEFAULT_CITY = 'Moscow';

module.exports = {
    WEATHER_SHOW,
    BASE_URL,
    API_TOKEN,
    DEFAULT_CITY,
    WEATHER_REQ_URL,
    RES_SUCCESS_CODE,
    RES_ENCODE,
    RES_CHUNKS,
    RES_END,
};