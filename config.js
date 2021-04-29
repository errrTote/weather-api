module.exports = {
  localIP: "181.28.131.5",
  port: process.env.port || 5000,
  lang: process.env.WEATHER_LANG || "es",
  units: process.env.UNITS || "metric",
  environment: process.env.ENVIRONMENT || "QA",
  weatherApi: process.env.WEATHER_API || "https://api.openweathermap.org/data/2.5",
  weatherApiKey: process.env.WEATHER_API_KEY || "4c126a7dd19bcd5759d69fbd8d122d0e",
  ipApiKey: process.env.IP_API_KEY || "4468a9c73f522ddc3f89351934f2a277",
  ipApi: process.env.IP_API || "http://api.ipapi.com/api",
}