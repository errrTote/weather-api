const express = require("express");
const requestIp = require("request-ip");
const cors = require("cors");
const { port } = require("./config");
const router = require("./network/routes");
const app = express();

app.use(express.json());
app.use(requestIp.mw());

app.use(cors());

router(app);

app.get("/", (req, res) => {
  res.status(200).send("Welcome")
})

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
})
