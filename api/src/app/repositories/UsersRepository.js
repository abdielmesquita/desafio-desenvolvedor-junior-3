const db = require('../../database');

class UsersRepository {
  async findByEmail(email) {
    const [row] = await db.query(`
    SELECT * FROM users
    WHERE email = $1`, [email]);

    return row;
  }

  async create(name, email, password) {
    const [row] = await db.query(`
    INSERT INTO users(name, email, password)
    VALUES ($1, $2, $3)
    RETURNING name, email`, [name, email, password]);

    return row;
  }

  async session(email) {
    const [row] = await db.query(`
    SELECT * FROM users
    WHERE email = $1`, [email]);

    return row;
  }
}

module.exports = new UsersRepository();
