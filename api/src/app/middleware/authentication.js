const jwt = require('jsonwebtoken');

module.exports = async function userAuthentication(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(400).json({ error: 'Autenticação do usuário é obrigatória.' });
  }

  // const tokenData = await jwt.verify(token, process.env.JWT_DEV_ENVIRONMENT);

  jwt.verify(token, process.env.JWT_DEV_ENVIRONMENT, (err) => {
    if (err) {
      return response.status(400).json({ error: 'Autenticação inválida.' });
    }
    return next();
  });
};
