var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const shows = await db.Show.findAll();
  res.render('index', { title: 'a/A Express Skeleton Home', shows });
}));

/* GET shows/:id */
router.get('/shows/:id(\\d+)', asyncHandler(async (req, res) => {
  const showId = parseInt(req.params.id, 10);
  const show = await db.Show.findByPk(showId);
  const reviews = await db.Review.findAll({
    where: { showId },
    include: [{ model: db.User, as: 'User' }]
  });

  const watched = await db.WatchedList.findOne({
    where: {
      showId,
      userId: res.locals.user.id
    }
  });

  const wantToWatch = await db.WantToWatchList.findOne({
    where: {
      showId,
      userId: res.locals.user.id
    }
  });

  res.render('show', {
    title: show.title,
    show,
    reviews,
    watched,
    wantToWatch
  });
}));

/* Adds show to watched list */
router.post('/shows/:id/watched', asyncHandler(async (req, res) => {
  const showId = parseInt(req.params.id, 10);
  const userId = res.locals.user.id;
  await db.WatchedList.create({
    showId,
    userId
  })
  res.redirect(`/shows/${showId}`)
}));

/* Adds show to want to watch list */
router.post('/shows/:id/want-to-watch', asyncHandler(async (req, res) => {
  const showId = parseInt(req.params.id, 10);
  const userId = res.locals.user.id;
  await db.WantToWatchList.create({
    showId,
    userId
  })
  res.redirect(`/shows/${showId}`)
}));


module.exports = router;
