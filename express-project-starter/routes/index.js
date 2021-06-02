var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const shows = await db.Show.findAll();
  res.render('index', { title: 'a/A Express Skeleton Home', shows });
}));

module.exports = router;
