const { Router } = require('express');
const userAuthentication = require('./app/middleware/authentication');

const UserController = require('./app/controllers/UserController');

const PostController = require('./app/controllers/PostController');

const router = Router();

// Rotas para teste
router.get('/', (request, response) => {
  response.send('Hello to the microblog api world!');
});
router.get('/protected-route', userAuthentication, UserController.protected);

router.post('/register', UserController.store);
router.post('/login', UserController.login);

router.get('/posts', userAuthentication, PostController.index);
router.get('/posts/:id', userAuthentication, PostController.show);
router.delete('/posts/:id', userAuthentication, PostController.delete);
router.post('/posts', userAuthentication, PostController.store);
router.put('/posts/:id', userAuthentication, PostController.update);

module.exports = router;
