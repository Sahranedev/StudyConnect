const AbstractManager = require('./AbstractManager');

class TeachersManager extends AbstractManager {
  constructor() {
    super({ table: 'teachers' });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, city from  ${this.table} where id = ?`,
      [id],
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email],
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email from  ${this.table}`,
    );
  }

  insert(teacher) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, password, email, avatar) values (?, ?, ?, ?, ?)`,
      [
        teacher.firstname,
        teacher.lastname,
        teacher.hashedPassword,
        teacher.email,
        teacher.avatar,
      ],
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, city = ?, language = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.city,
        user.hashedPassword,
        user.id,
      ],
    );
  }
}

module.exports = TeachersManager;
