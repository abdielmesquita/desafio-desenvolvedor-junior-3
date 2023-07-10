const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async store(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'O nome é obrigatório.' });
    }

    if (!email) {
      return response.status(400).json({ error: 'O e-mail é obrigatório.' });
    }

    if (!password) {
      return response.status(400).json({ error: 'A senha é obrigatória.' });
    }

    const usuarioExiste = await UsersRepository.findByEmail(email);

    if (usuarioExiste) {
      return response.status(400).json({ error: 'Esse e-mail já está em uso.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await UsersRepository.create(name, email, passwordHash);

    response.send(user);
  }

  async login(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({ error: 'O e-mail e senha são obrigatórios.' });
    }

    const user = await UsersRepository.session(email);
    if (!user) {
      return response.status(400).json({ error: 'O e-mail ou senha do usuário estao incorretas.' });
    }

    const passwordValido = await bcrypt.compare(password, user.password);
    if (!passwordValido) {
      return response.status(400).json({ error: 'O e-mail ou senha do usuário estao incorretas.' });
    }

    delete user.password;

    const token = jwt.sign(user.email, process.env.JWT_SECRET_TOKEN);

    response.send({ token, user });
  }

  async protected(request, response) {
    response.send('Estou na rota protegida');
  }
}

module.exports = new UserController();
