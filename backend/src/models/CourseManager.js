const AbstractManager = require('./AbstractManager');

class CourseManager extends AbstractManager {
  constructor() {
    super({ table: 'courses' });
  }

  find(id) {
    return this.connection.query(
      `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.description, ${this.table}.teacher_id, ${this.table}.date, ${this.table}.seat_count, t.firstname, t.lastname 
       FROM ${this.table}
       JOIN teachers as t ON ${this.table}.teacher_id = t.id
       WHERE ${this.table}.id = ?`,
      [id],
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT ${this.table}.id, ${this.table}.name, ${this.table}.description, ${this.table}.teacher_id, ${this.table}.date, ${this.table}.seat_count, t.firstname, t.lastname 
       FROM ${this.table}
       LEFT JOIN teachers as t ON ${this.table}.teacher_id = t.id
       ORDER BY ${this.table}.id DESC`,
    );
  }

  insert(course) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, description, teacher_id, date, seat_count) VALUES (?, ?, ?, ?, ?)`,
      [
        course.name,
        course.description,
        course.teacher_id,
        course.date,
        course.seat_count,
      ],
    );
  }

  update(course) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, description = ?, teacher_id = ?, date = ?, seat_count = ? WHERE id = ?`,
      [
        course.name,
        course.description,
        course.teacher_id,
        course.date,
        course.seat_count,
        course.id,
      ],
    );
  }

  delete(id) {
    return this.connection.query(
      `DELETE FROM ${this.table} WHERE ${this.table}.id = ?`,
      [id],
    );
  }
}

module.exports = CourseManager;
