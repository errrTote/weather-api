const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");
const { port } = require("./config");
const router = require("./network/routes");
const app = express();

app.use(requestIp.mw());

app.use(cors());

router(app);

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
})
