const request = require("supertest");
const app = require("../app");
const { closePool } = require("../models/index");
const prisma = require("../../prisma/client");
const { parse } = require("date-fns");

// LIRE LES ETUDIANTS

describe("GET /api/students", () => {
  it("should return all students with status 200 and the correct structure", async () => {
    const response = await request(app).get("/api/students");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    if (response.body.length > 0) {
      const student = response.body[0];
      expect(student).toHaveProperty("id");
      expect(student).toHaveProperty("firstname");
      expect(student).toHaveProperty("lastname");
      expect(student).toHaveProperty("email");
      expect(student).toHaveProperty("avatar");
      expect(student).toHaveProperty("role");
      expect(student).toHaveProperty("createdAt");
      expect(student).toHaveProperty("lastLogin");
      expect(student).toHaveProperty("status");
      expect(student).toHaveProperty("preferredLanguage");
      expect(student).toHaveProperty("students");

      const studentDetails = student.students[0];
      expect(studentDetails).toHaveProperty("id");
      expect(studentDetails).toHaveProperty("user_id");
      expect(studentDetails).toHaveProperty("progress");
      expect(studentDetails).toHaveProperty("lastActivity");
      expect(studentDetails).toHaveProperty("curriculum");
      expect(studentDetails).toHaveProperty("points");
      expect(studentDetails).toHaveProperty("classroom_id");
    }
  });

  it("retourne un étudiant avec son id", async () => {
    const id = 22;
    const response = await request(app).get(`/api/students/${id}`);

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe("object");

    if (response.body.length > 0) {
      const student = response.body[0];

      expect(student).toHaveProperty("id");
      expect(student).toHaveProperty("user_id");
      expect(student).toHaveProperty("progress");
      expect(student).toHaveProperty("lastActivity");
      expect(student).toHaveProperty("curriculum");
      expect(student).toHaveProperty("points");
      expect(student).toHaveProperty("classroom_id");

      const studentDetails = student.user[0];

      expect(studentDetails).toHaveProperty("id");
      expect(studentDetails).toHaveProperty("firstname");
      expect(studentDetails).toHaveProperty("lastname");
      expect(studentDetails).toHaveProperty("email");
      expect(studentDetails).toHaveProperty("avatar");
      expect(studentDetails).toHaveProperty("role");
      expect(studentDetails).toHaveProperty("createdAt");
      expect(studentDetails).toHaveProperty("lastLogin");
      expect(studentDetails).toHaveProperty("status");
      expect(studentDetails).toHaveProperty("preferredLanguage");
      expect(studentDetails).toHaveProperty("students");
    }
  });

  it("should return 404 for non-existent route", async () => {
    const response = await request(app).get("/api/nonexistentroute");

    expect(response.status).toBe(404);
  });
});

// CREER UN ETUDIANT

describe("POST /api/students", () => {
  let createdStudentId;

  it("should create a student user successfully", async () => {
    const newStudent = {
      firstname: "Traümerei",
      lastname: "Lo Po Bia",
      email: "traumerei301@example.com",
      password: "password",
      progress: "In progress",
      curriculum: "Advanced Mathematics",
      points: 10,
    };

    const response = await request(app).post("/api/students").send(newStudent);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.firstname).toBe(newStudent.firstname);
    expect(response.body.lastname).toBe(newStudent.lastname);

    createdStudentId = response.body.students[0].id;
  });

  describe("DELETE /api/students/:id", () => {
    it("doit supprimer l'étudiant créer précedemment", async () => {
      if (createdStudentId) {
        const response = await request(app).delete(
          `/api/students/${createdStudentId}`
        );
        expect(response.status).toBe(200);
      } else {
        throw new Error("No student was created to delete");
      }
    });
  });

  it("Doit retourner une erreur 400 si un champ obligatoire  est manquant lors de la création de l'Étudiant, ici c'est email", async () => {
    const newStudent = {
      firstname: "Traümerei",
      lastname: "Lo Po Bia",
      password: "password",
      progress: "In progress",
      curriculum: "Advanced Mathematics",
      points: 10,
    };

    const response = await request(app).post("/api/students").send(newStudent);
    expect(response.status).toBe(400);
  });
});

afterAll(async () => {
  await closePool();
});
