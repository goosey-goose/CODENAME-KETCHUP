var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const shows = await db.Show.findAll();
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

/* GET shows/:id/reviews */
router.get('/shows/:id(\\d+)/reviews', csrfProtection, asyncHandler(async (req, res) => {
	const id = req.params.id;
	const review = db.Review.build();
	res.render('review-add', {
		title: 'Add Show Reviews',
		review,
		id,
		csrfToken: req.csrfToken(),
	});
}));

/* POST shows/:id/reviews */
router.post('/shows/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
	const { content, userRating } = req.body;
	// console.log(content)
	// console.log(userRating)
	await db.Review.create({
		userId: 1,
		showId: 1,
		content,
		userRating: 5.0,
	});

	res.redirect('/');
}));

module.exports = router;
