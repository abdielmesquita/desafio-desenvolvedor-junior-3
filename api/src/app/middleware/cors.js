module.exports = (request, response, next) => {
  // TODO: temporário apenas para permitir testar em desktops e mobiles
  if (request.hostname === 'localhost') {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  } else {
    response.setHeader('Access-Control-Allow-Origin', 'http://192.168.0.10:3000');
  }
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
