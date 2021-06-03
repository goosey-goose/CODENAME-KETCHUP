'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Reviews' }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Review, { foreignKey: 'reviewId' });

    const columnMapping = {
      through: 'Likes',
      otherKey: 'userId',
      foreignKey: 'commentId'
    };
    Comment.belongsToMany(models.User, columnMapping);

  };
  return Comment;
};
