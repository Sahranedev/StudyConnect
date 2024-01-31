const supertest = require("supertest");
const express = require("express");
const { prisma } = require("../../prisma/client");
const { readStudentById } = require("../controllers/studentsControllers");

jest.mock("../../prisma/client", () => ({
  prisma: {
    students: {
      findUnique: jest.fn().mockResolvedValue({
        id: 36,
        progress: null,
        lastActivity: null,
        curriculum: null,
        points: null,
        classroom_id: null,
        user_id: 57,
        user: {
          id: 57,
          firstname: "Sahrane",
          lastname: "Guassemi",
          email: "sahrane@student.com",
          avatar: null,
        },
      }),
    },
  },
}));

const app = express();
app.use(express.json());
app.get("/api/students/:id", readStudentById);

describe("GET /api/students/:id", () => {
  const testId = 36;
  it("should return a student by their id and a status of 200", async () => {
    const response = await supertest(app).get(`/api/students/${testId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      id: 36,
      progress: null,
      lastActivity: null,
      curriculum: null,
      points: null,
      classroom_id: null,
      user_id: 57,
      user: {
        id: 57,
        firstname: "Sahrane",
        lastname: "Guassemi",
        email: "sahrane@student.com",
        avatar: null,
      },
    });
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { id: testId },
    });
  });
});

describe("Titre de la suite de test", () => {
  it("Mon scénario de test 1", () => {
    // Le code du scénario de test
  });
  it("Mon scénario de test 2", () => {
    // Le code du scénario de test
  });

  it("Mon scénario de test N", () => {
    // Le code du scénario de test
  });

  expect("La nature de l'entité que j'attends").toBe("Doit être ceci");
});
