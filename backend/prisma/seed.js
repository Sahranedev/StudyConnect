const prisma = require("./client");

async function main() {
  const TestUser = await prisma.user.create({
    data: {
      firstname: "Github",
      lastname: "Actions",
      email: "github@actions.com",
      password: "password",
      progress: "In progress",
      curriculum: "Advanced Chess",
      points: 10,
    },
  });
  console.log(
    `Nouvel utilisateur créé: ${TestUser.firstname} (ID: ${TestUser.id})`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
