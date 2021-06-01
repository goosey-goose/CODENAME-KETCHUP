'use strict';
module.exports = (sequelize, DataTypes) => {
  const WantToWatchList = sequelize.define('WantToWatchList', {
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
  WantToWatchList.associate = function (models) {
    // associations can be defined here
  };
  return WantToWatchList;
};
