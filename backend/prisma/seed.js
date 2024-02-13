const prisma = require("./client");

async function main() {
  const TestUser = await prisma.user.create({
    data: {
      firstname: "Github",
      lastname: "Actions",
      email: "github@actions.com",
      password: "password",
      role: "Student",
      students: {
        create: {
          progress: "In progress",
          curriculum: "Advanced Chess",
          points: 10,
        },
      },
    },
    include: {
      students: true,
    },
  });

  console.log(`User created: ${TestUser.firstname} ${TestUser.lastname}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
