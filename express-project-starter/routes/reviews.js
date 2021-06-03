const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

const reviewValidators = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide content review'),
  check('userRating')
    .isInt({ min: 0, max: 10 })
    .withMessage('Please rate this show on a scale from 1 (worst) to 10 (best)'),
];

/* GET shows/:id/reviews */
router.get('/reviews', asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id, 10);
	const review = await db.Review.findByPk(id);
	res.render('review-add', { title: 'Show Reviews' }, review);
}));

/* POST shows/:id/reviews */
// router.post('/shows/:id(\\d+)/reviews', asyncHandler(async (req, res) => {

// }));

module.exports = router;
