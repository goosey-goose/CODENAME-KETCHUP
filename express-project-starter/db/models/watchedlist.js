'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedList = sequelize.define('WatchedList', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Shows' }
    }
  }, {});
  WatchedList.associate = function (models) {
    // associations can be defined here
  };
  return WatchedList;
};
