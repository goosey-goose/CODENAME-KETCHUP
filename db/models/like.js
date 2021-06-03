'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Comments' }
    }
  }, {});
  Like.associate = function (models) {
  };
  return Like;
};
