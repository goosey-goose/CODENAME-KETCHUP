const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

const router = express.Router();

router.post("/search", csrfProtection, asyncHandler(async (req, res, next) => {
  const { q } = req.body;
  const show = await db.Show.findOne({
    where: {
      title: q
    }
  });
  res.redirect(`/shows/${show.id}`)
}));

module.exports = router;
