const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

// const reviewValidators = [
//   check('content')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide content review'),
//   check('userRating')
//     .isInt({ min: 0, max: 10 })
//     .withMessage('Please rate this show on a scale from 1 (worst) to 10 (best)'),
// ];

/* GET shows/:id/reviews */
router.get('/reviews', csrfProtection, asyncHandler(async (req, res) => {
	const review = await db.Review.build();
	res.render('review-add', {
		title: 'Add Show Reviews',
		review,
		csrfToken: req.csrfToken(),
	});
}));

/* POST shows/:id/reviews */
router.post('/reviews', asyncHandler(async (req, res) => {
	const { content, userRating } = req.body;
	console.log(content)
}));

module.exports = router;
