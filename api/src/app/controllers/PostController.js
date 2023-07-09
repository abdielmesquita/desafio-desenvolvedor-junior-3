const { DateTime } = require('luxon');

const PostsRepository = require('../repositories/PostsRepository');

class PostController {
  async index(request, response) {
    const { orderBy, userId } = request.query;

    let posts = [];
    if (userId) {
      posts = await PostsRepository.findAllByUserId(userId, orderBy);
    } else {
      posts = await PostsRepository.findAll(orderBy);
    }

    response.json(posts);
  }

  async show(request, response) {
    const { id } = request.params;
    const post = await PostsRepository.findById(id);

    if (!post) {
      return response.status(404).json({ error: 'Post não encontrado.' });
    }

    response.json(post);
  }

  async store(request, response) {
    const { title, body, userId } = request.body;

    if (!title) {
      return response.status(400).json({ error: 'O título é obrigatório.' });
    }

    if (!body) {
      return response.status(400).json({ error: 'O texto é obrigatório.' });
    }

    if (!userId) {
      return response.status(400).json({ error: 'O usuário é obrigatório.' });
    }

    const createdAt = DateTime.utc().toFormat('yyyy-MM-dd HH:mm:ss');

    const post = await PostsRepository.create(title, body, createdAt, userId);

    response.send(post);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      title, body, userId,
    } = request.body;

    const postExists = await PostsRepository.findById(id);
    if (!postExists) {
      return response.status(404).json({ error: 'Post não encontrado.' });
    }

    if (!userId || postExists.user_id !== userId) {
      return response.status(401).json({ error: 'O usuário não é autorizado a editar esse post.' });
    }

    if (!title) {
      return response.status(400).json({ error: 'O título é obrigatório.' });
    }

    if (!body) {
      return response.status(400).json({ error: 'O texto é obrigatório.' });
    }

    const post = await PostsRepository.update(id, {
      title, body,
    });

    response.json(post);
  }

  async delete(request, response) {
    const { id } = request.params;
    const { userId } = request.body;

    const post = await PostsRepository.findById(id);

    if (!userId || post.user_id !== userId) {
      return response.status(401).json({ error: 'O usuário não é autorizado a apagar esse post.' });
    }

    await PostsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new PostController();
