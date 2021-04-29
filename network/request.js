const axios = require("axios").default;

const responseHandler = (response) => {
  if (!response || !response.status) return { status: 500, message: "Error desconocido en la consulta" };
  if(response.status !== 200) console.log(response.data);
  const status = response.status;
  const data = response.data ? response.data : null;
  switch (status) {
    case 200:
      return { status, data: data }
    case 400:
      return { status, data: data ? data : "Datos incorrectos en la consulta" };
    case 401:
      return { status, data: data ? data : "Debe autenticarse para realizar esta consulta" };
    case 403:
      return { status, data: data ? data : "No posee los permisos para realizar esta consulta" };
    case 404:
      return { status, data: data ? data : "No se encontro resultados para esta consulta" };

    default:
      return { status, data: data ? data : "Error desconocido en la consulta" };
  }
}


exports.request = async (method, url, data = null, credentials = null) => {

  const requestInfo = {
    method,
    url,
  }

  if (data) {
    if (method === "get") requestInfo["params"] = data;
    else requestInfo["data"] = data;
  }

  if (credentials) {
    requestInfo["auth"] = {
      username: credentials.username,
      password: credentials.password
    }
  }
  console.log(requestInfo);
  try {
    const axiosResponse = await axios(requestInfo);

    const response = (responseHandler(axiosResponse))

    return response;
  } catch (error) {

    const response = (responseHandler(error.response))
    return response;
  }
}