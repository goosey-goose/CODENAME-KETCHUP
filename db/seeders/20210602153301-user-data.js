"use strict";

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
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
