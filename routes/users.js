const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const { restoreUser, requireAuth } = require('../auth');
const Sequelize = require("sequelize");
const db = require('../db/models');
const Op = Sequelize.Op;

router.get('/:id(\\d+)', restoreUser, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
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
  res.render('user', { csrfToken: req.csrfToken(), watchedShows, wantToWatchShows });
}));


module.exports = router;
