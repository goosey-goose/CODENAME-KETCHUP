'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    rated: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    runTime: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    writer: DataTypes.STRING,
    actors: DataTypes.TEXT,
    plot: DataTypes.TEXT,
    language: DataTypes.STRING,
    country: DataTypes.STRING,
    awards: DataTypes.STRING,
    poster: DataTypes.STRING,
    imdbRating: DataTypes.STRING,
    imdbId: DataTypes.STRING,
    totalSeasons: DataTypes.STRING,
    ketchupAverageRating: DataTypes.NUMERIC(3, 1),
  }, {});
  Show.associate = function (models) {
    Show.hasMany(models.Review, { foreignKey: 'showId' });

    const wantToWatchMapping = {
      through: 'WantToWatchList',
      otherKey: 'userId',
      foreignKey: 'showId'
    };
    Show.belongsToMany(models.User, wantToWatchMapping);

    const watchedMapping = {
      through: 'WatchedList',
      otherKey: 'userId',
      foreignKey: 'showId'
    };
    Show.belongsToMany(models.User, watchedMapping);
  };
  return Show;
};
