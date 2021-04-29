const { request } = require("../../network/request");
const { weatherApi, weatherApiKey, lang, units } = require("../../config");


exports.getWeather = async (city) => {
  const url = `${weatherApi}/weather`;
  
  const params = {
    q: city,
    lang,
    units,
    appid: weatherApiKey
  }
  
  const { data } = await request("get", url, params);

  return data;
}

exports.getForecast = async (city) => {
  const url = `${weatherApi}/forecast`;
  
  const params = {
    q: city,
    lang,
    units,
    appid: weatherApiKey
  }
  
  const { data } = await request("get", url, params);

  return data;
}