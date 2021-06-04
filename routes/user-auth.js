const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

const userValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for user name.'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for email address.')
    .isEmail()
    .withMessage('Email address is not a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for password.'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please confirm the password.')
];

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post('/register', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      userName,
      password,
    } = req.body;

    const user = db.User.build({
      email,
      userName
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;

      await user.save();
      loginUser(req, res, user);
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for email address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for password'),
];

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});



router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // TODO Attempt to login the user.
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        // If the user exists then compare their password
        // to the provided password.
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          // If the password hashes match, then login the user
          // and redirect them to the default route.
          // TODO Login the user.
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }

      // Otherwise display an error message to the user.
      errors.push('Login failed for the provided email address and password');

    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));


router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/login');
});

router.post('/login-demo', asyncHandler(async (req, res) => {
  const email = 'john@gmail.com'; // demo user's email
  const user = await db.User.findOne({
    where: {
      email
    }
  });
  loginUser(req, res, user);
  return res.redirect('/');
}));


module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
