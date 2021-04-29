const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/current", (req, res) => {
  const city = req.query.city;
  controller.getWeather(city)
  .then(data => {
    response.success(res, data);
  })
  .catch(e => {
    response.error(res, e.message, e.code);
  })
});

router.get("/forecast", (req, res) => {
  const city = req.query.city;
  controller.getForecast(city)
  .then(data => {
    response.success(res, data);
  })
  .catch(e => {
    response.error(res, e.message, e.code);
  })
});


module.exports = router;