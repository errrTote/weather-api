const ipApiRoutes = require("../features/ipApi/network");
const weatherRoutes = require("../features/weather/network");

const routes = (server) => {
  server.use("/ipapi", ipApiRoutes);
  server.use("/weather", weatherRoutes);
}

module.exports = routes; 