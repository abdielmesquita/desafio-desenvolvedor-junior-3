const { Router } = require('express');
const userAuthentication = require('./app/middleware/authentication');

const UserController = require('./app/controllers/UserController');

const router = Router();

// Rotas para teste
router.get('/', (req, res) => {
  res.send({ 'Hello to the microblog api world!' });
});
router.get('/protected-route', userAuthentication, UserController.protected);

router.post('/register', UserController.store);
router.post('/login', UserController.login);


module.exports = router;
