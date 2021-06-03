const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();
const { restoreUser, requireAuth } = require('../auth');

const db = require('../db/models');

router.get('/:id(\\d+)', restoreUser, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

  const watchedList = db.WatchedList.findAll({
    where: {
      userId: req.params.id
    }
  })
  const wantToWatchList = db.WantToWatchList.findAll({
    where: {
      userId: req.params.id
    }
  })
  res.render('profile', { csrfToken: req.csrfToken(), watchedList, wantToWatchList });

}));


module.exports = router;
