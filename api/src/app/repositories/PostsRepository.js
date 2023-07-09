const db = require('../../database');

class PostsRepository {
  async findAll(orderBy = 'DESC') {
    const direction = orderBy.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    const rows = await db.query(`
    SELECT posts.*, users.name AS user_name
      FROM posts LEFT JOIN users
      ON users.id = posts.user_id
      ORDER by posts.created_at ${direction}`);

    return rows;
  }

  async findAllByUserId(userId, orderBy = 'DESC') {
    const direction = orderBy.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    const rows = await db.query(`
    SELECT posts.*, users.name AS user_name
    FROM posts
    LEFT JOIN users ON users.id = posts.user_id
    WHERE posts.user_id = $1
    ORDER BY posts.created_at ${direction}`, [userId]);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT posts.*, users.name AS user_name
    FROM posts
    LEFT JOIN users ON users.id = posts.user_id
    WHERE posts.id = $1
    `, [id]);

    return row;
  }

  async create(title, body, created_at, user_id) {
    const [row] = await db.query(`
    INSERT INTO posts(title, body, created_at, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [title, body, created_at, user_id]);

    return row;
  }

  async update(id, {
    title, body,
  }) {
    const [row] = await db.query(`
      UPDATE posts
      SET title = $1, body = $2
      WHERE id = $3
      RETURNING *
    `, [title, body, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM posts
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new PostsRepository();
