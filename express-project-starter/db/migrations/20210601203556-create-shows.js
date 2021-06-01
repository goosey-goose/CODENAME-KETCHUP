'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      rated: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.STRING
      },
      runTime: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      writer: {
        type: Sequelize.STRING
      },
      actors: {
        type: Sequelize.TEXT
      },
      plot: {
        type: Sequelize.TEXT
      },
      language: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      awards: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      imdbRating: {
        type: Sequelize.STRING
      },
      imdbId: {
        type: Sequelize.STRING
      },
      totalSeasons: {
        type: Sequelize.STRING
      },
      ketchupAverageRating: {
        type: Sequelize.NUMERIC(3,1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shows');
  }
};
