'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    content: DataTypes.TEXT,
    userRating: DataTypes.NUMERIC,
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Shows' }
    }
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Show, { foreignKey: 'showId' });
    Review.hasMany(models.Comment, { foreignKey: 'reviewId' });
  };
  return Review;
};
