exports.success = (res, data, status = 200) => {
  res.status(status).send({
    error: '',
    data,
    code: 200
  });
}

exports.error = (res, message, status = 500) => {
  
  res.status(status).send({
    error: message,
    data: {},
    code: status
  })
}