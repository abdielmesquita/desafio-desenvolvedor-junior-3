const jwt = require('jsonwebtoken');

module.exports = async function userAuthentication(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ error: 'Autenticação do usuário é obrigatória.' });
  }

  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err) => {
    if (err) {
      return response.status(401).json({ error: 'Autenticação inválida.' });
    }
    return next();
  });
};
