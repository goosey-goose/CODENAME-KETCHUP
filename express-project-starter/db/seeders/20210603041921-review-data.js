'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
      { userId: faker.datatype.number({ "min": 1, "max": 10 }), content: faker.lorem.paragraph(), userRating: faker.datatype.number(10), showId: faker.datatype.number({ "min": 1, "max": 10 }), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
