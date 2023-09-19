const AbstractManager = require('./AbstractManager');

class StudentsManager extends AbstractManager {
  constructor() {
    super({ table: 'students' });
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
      `select id, firstname, lastname, email, city from  ${this.table}`,
    );
  }

  insert(student) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, city, email, avatar, password) values (?, ?, ?, ?, ?, ?)`,
      [
        student.firstname,
        student.lastname,
        student.city,
        student.email,
        student.role,
        student.hashedPassword,
      ],
    );
  }

  update(student) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, avatar = ?, language = ?, hashedPassword = ? where id = ?`,
      [
        student.firstname,
        student.lastname,
        student.email,
        student.avatar,
        student.hashedPassword,
        student.id,
      ],
    );
  }
}

module.exports = StudentsManager;
