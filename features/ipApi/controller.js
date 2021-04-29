// const store = require("./store");
const { getCurrentCity } = require("../../services/ipApi/api");

const getClientCity = (req) => {
  return new Promise(async (resolve, reject) => {
    if (!req) {
      console.log("[ipApiController] Parametro req requerido");
      reject("No se pudo obtener la información de la ciudad actual");
      return false;
    }
    try {
      const apiResponse = await getCurrentCity(req);
      const data = { city: apiResponse.city }
      resolve(data);
    } catch (error) {
      console.log(error);
      reject("No se pudo obtener la información de la ciudad actual");
      return false;
    }
  });
}

module.exports = {
  getCity: getClientCity
}