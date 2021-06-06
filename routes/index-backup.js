var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  const shows = await db.Show.findAll({
    limit: 10
  });
  res.render('index', { title: 'a/A Express Skeleton Home', shows, csrfToken: req.csrfToken() });
}));

/* GET shows/:id */
router.get('/shows/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const showId = parseInt(req.params.id, 10);
  const show = await db.Show.findByPk(showId);
  const reviews = await db.Review.findAll({
    where: { showId },
    include: [{ model: db.User, as: 'User' }]
	});

	console.log(reviews)

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

	const tempId = res.locals.user.id;

  res.render('show', {
    title: show.title,
    show,
    reviews,
    watched,
		wantToWatch,
		tempId,
  });
}));

/* Adds show to watched list */
router.post('/shows/:id/watched', asyncHandler(async (req, res) => {
  const showId = parseInt(req.params.id, 10);
  const userId = res.locals.user.id;
  await db.WatchedList.create({
    showId,
    userId,
    csrfToken: req.csrfToken()
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

/* GET shows/:id/reviews */
router.get('/shows/:id(\\d+)/reviews', csrfProtection, asyncHandler(async (req, res) => {
	const id = req.params.id;
	const show = await db.Show.findByPk(id);
	const review = db.Review.build();
	res.render('review-add', {
		title: 'Add Show Reviews',
		show,
		review,
		id,
		csrfToken: req.csrfToken(),
	});
}));

/* POST shows/:id/reviews */
router.post('/shows/:id(\\d+)/reviews', csrfProtection, asyncHandler(async (req, res) => {
	const {
		content,
		userRating
	} = req.body;

	// console.log("***REQ BODY***", req.body)
	// console.log(userRating)
	const newReview = await db.Review.build({
		userId: res.locals.user.id,
		showId: req.params.id,
		content,
		userRating,
	});

	await newReview.save();

	res.redirect(`/shows/${req.params.id}`);		//update redirect router later
}));

/* GET shows/:id/reviews/:reviewId */
// router.get('/shows/:id(\\d+)', csrfProtection,
//   asyncHandler(async (req, res) => {
//     const bookId = parseInt(req.params.id, 10);
//     const book = await db.Book.findByPk(bookId);
//     res.render('book-edit', {
//       title: 'Edit Book',
//       book,
//       csrfToken: req.csrfToken(),
//     });
//   }));

router.get('/shows/:id(\\d+)/reviews/:reviewId', csrfProtection, asyncHandler(async (req, res) => {
	const id = req.params.id;
	const tempId = req.params.reviewId;
	const show = await db.Show.findByPk(id);
	// const review = db.Review.build();
	const review = await db.Review.findByPk(tempId);
	console.log("##########", review);

	res.render('review-edit', {
		title: 'Edit Show Reviews',
		show,
		review,
		id,
		csrfToken: req.csrfToken(),
	});
}));


module.exports = router;
