const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require("../auth");
const db = require('../db/models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const router = express.Router();

router.post("/search", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const referer = req.get("Referer");
  const { q } = req.body;
  const show = await db.Show.findOne({
    where: {
      title: { [Op.iLike]: q }
    }
  });
  if (show === null) {
    res.redirect(referer);
  }
  res.redirect(`/shows/${show.id}`)
}));

module.exports = router;
