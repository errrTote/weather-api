const { request } = require("../../network/request");
const { ipApi, ipApiKey, environment, localIP } = require("../../config");

exports.getCurrentCity = async (req) => {
  const ip = environment !== "PROD" ? localIP : req.clientIp;

  const url = `${ipApi}/${ip}`;
  
  const params = {
    access_key: ipApiKey
  }
  const { data } = await request("get", url, params);

  return data;
}