const AbstractManager = require("./AbstractManager");

class EnrollmentsManager extends AbstractManager {
  constructor() {
    super({ table: "enrollments" });
  }

  findUserByEnrollment(id) {
    return this.connection.query(
      `SELECT ${this.table}.id, ${this.table}.student_id, ${this.table}.course_id, ${this.table}.enrollment_date,
              u.firstname, u.lastname, u.email, u.avatar, u.role, u.createdAt, u.lastLogin, u.status 
       FROM ${this.table}
       JOIN students as s ON ${this.table}.student_id = s.id
       JOIN user as u ON s.userID = u.id
       WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.description, ${this.table}.teacher_id, ${this.table}.date, ${this.table}.seat_count, t.firstname, t.lastname 
       FROM ${this.table}
       LEFT JOIN teachers as t ON ${this.table}.teacher_id = t.id
       ORDER BY ${this.table}.id DESC`
    );
  }

  insert(enrollment) {
    return this.connection.query(
      `INSERT INTO ${this.table} (student_id, course_id, enrollment_date) VALUES (?, ?, ?)`,
      [enrollment.student_id, enrollment.course_id, enrollment.enrollment_date]
    );
  }

  update(enrollment) {
    return this.connection.query(
      `UPDATE ${this.table} SET student_id = ?, course_id = ?, enrollment_date = ? WHERE id = ?`,
      [
        enrollment.student_id,
        enrollment.course_id,
        enrollment.enrollment_date,
        enrollment.id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = EnrollmentsManager;
