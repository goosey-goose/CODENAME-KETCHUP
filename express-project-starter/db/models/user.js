'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
    },
    profilePicLink: {
      type: DataTypes.TEXT,
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });

    const wantToWatchMapping = {
      through: 'WantToWatchList',
      otherKey: 'showId',
      foreignKey: 'userId'
    };
    User.belongsToMany(models.Show, wantToWatchMapping);

    const watchedMapping = {
      through: 'WatchedList',
      otherKey: 'showId',
      foreignKey: 'userId'
    };
    User.belongsToMany(models.Show, watchedMapping);

    const likesMapping = {
      through: 'Like',
      otherKey: 'commentId',
      foreignKey: 'userId'
    };
    User.belongsToMany(models.Comment, likesMapping)
  };
  return User;
};
