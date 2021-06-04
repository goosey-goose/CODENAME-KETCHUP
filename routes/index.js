var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const shows = await db.Show.findAll({
    limit: 10
  });
  res.render('index', { title: 'a/A Express Skeleton Home', shows });
}));

/* GET shows/:id */
router.get('/shows/:id(\\d+)', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const show = await db.Show.findByPk(id);
  const reviews = await db.Review.findAll({
    where: { showId: id },
    include: [{
      model: db.User,
      as: 'User'
    }]
  });

  res.render('show', {
    title: show.title,
    show,
    reviews
  })
}));

module.exports = router;
