const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, city from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    console.log("je suis dans findByEmailWithPassword : ", email);
    return this.connection
      .query(
        `SELECT u.*, s.id AS student_id, s.progress, s.lastActivity, s.curriculum, s.points, s.classroom_id, t.id AS teacher_id
      FROM ${this.table} u
      LEFT JOIN students s ON u.id = s.user_id
      LEFT JOIN teachers t ON u.id = t.user_id
      WHERE u.email = ?`,
        [email]
      )
      .then(([results, fields]) => {
        return results[0];
      })
      .catch((error) => {
        throw error;
      });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM  ${this.table}`);
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
      ]
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
      ]
    );
  }
}

module.exports = UserManager;
