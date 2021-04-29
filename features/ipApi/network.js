const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/city", (req, res) => {
  controller.getCity(req)
  .then(data => {
    response.success(res, data);
  })
  .catch(e => {
    response.error(res, e.message, e.code);
  })
})

module.exports = router;