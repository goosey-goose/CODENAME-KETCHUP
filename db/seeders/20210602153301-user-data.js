"use strict";

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: 'demo_user',
          email: 'demo@example.com',
          bio: 'Welcome to ketchup, demo_user!',
          profilePicLink: 'https://cdn.fakercloud.com/avatars/kojourin_128.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          bio: faker.lorem.paragraph(),
          profilePicLink: faker.internet.avatar(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
