'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WatchedLists', [
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), showId: faker.datatype.number({ "min": 1, "max": 450 }), createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WatchedLists', null, {});
  }
};
