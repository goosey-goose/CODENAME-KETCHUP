const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const { restoreUser, requireAuth } = require('../auth');
const Sequelize = require("sequelize");
const db = require('../db/models');
const Op = Sequelize.Op;

router.get('/:id(\\d+)', requireAuth, restoreUser, csrfProtection, asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const watchedList = await db.WatchedList.findAll({
    where: { userId: id },
  })
  const watchedIds = watchedList.map((element) => {
    return element.showId;
  })
  const watchedShows = await db.Show.findAll({
    where: {
      id: {
        [Op.in]: watchedIds
      }
    }
  })
  const wantToWatchList = await db.WantToWatchList.findAll({
    where: { userId: id },
  })
  const wantToWatchIds = wantToWatchList.map((element) => {
    return element.showId;
  })
  const wantToWatchShows = await db.Show.findAll({
    where: {
      id: {
        [Op.in]: wantToWatchIds
      }
    }
  })
  const reviews = await db.Review.findAll({
    where: { userId: id },
    include: { model: db.Show }
  })

  const reviewedShowIds = [];
  reviews.forEach((review) => {
    reviewedShowIds.push(review.Show.id);
  })

  res.render('user', { csrfToken: req.csrfToken(), watchedShows, wantToWatchShows, reviews, reviewedShowIds });
}));

/* Adds show to watched list */
router.post('/:id(\\d+)/watched', csrfProtection, asyncHandler(async (req, res) => {

  const { showId } = req.body
  const userId = res.locals.user.id;
  await db.WatchedList.create({
    "showId": showId,
    "userId": userId,
  })
  const removedShow = await db.WantToWatchList.findOne({
    where: {
      "showId": showId,
      "userId": userId
    }
  })
  await removedShow.destroy();
  res.redirect(`/users/${userId}`)
}));

/* Removes show from want to watch list */
router.post('/:id(\\d+)/remove-want-to-watch', csrfProtection, asyncHandler(async (req, res) => {
  const { showId } = req.body
  const userId = res.locals.user.id;
  const removedShow = await db.WantToWatchList.findOne({
    where: {
      "showId": showId,
      "userId": userId
    }
  })
  await removedShow.destroy();
  res.redirect(`/users/${userId}`)
}));

/* Removes show from wantched list */
router.post('/:id(\\d+)/remove-watched', csrfProtection, asyncHandler(async (req, res) => {
  const { showId } = req.body
  const userId = res.locals.user.id;
  const removedShow = await db.WatchedList.findOne({
    where: {
      "showId": showId,
      "userId": userId
    }
  })
  await removedShow.destroy();
  res.redirect(`/users/${userId}`)
}));

module.exports = router;
