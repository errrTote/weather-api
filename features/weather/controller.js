const { getCurrentCity } = require("../../services/ipApi/api");
const { getWeather, getForecast } = require("../../services/weather/api");

const getCurrentWeather = (city) => {
return new Promise(async (resolve, reject) => {
  if (!city) city = await getCurrentCity();
    try {
      const weatherResponse = await getWeather(city);
      resolve(weatherResponse);
    } catch (error) {
      console.log(error);
      reject("No se pudo obtener la información  climatica de la ciudad actual");
      return false;
    }
  });
}

const getCityForecast = (city) => {
return new Promise(async (resolve, reject) => {
  if (!city) city = await getCurrentCity();
    try {
      const forecastResponse = await getForecast(city);
      resolve(forecastResponse);
    } catch (error) {
      console.log(error);
      reject("No se pudo obtener el pronostico la ciudad actual");
      return false;
    }
  });
}

module.exports = {
  getWeather: getCurrentWeather,
  getForecast: getCityForecast
}