const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, requireAuth, logoutUser } = require('../auth');
const db = require('../db/models');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get("/", restoreUser, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  res.render("account", { csrfToken: req.csrfToken() });
}));

router.post("/username", csrfProtection, asyncHandler(async (req, res, next) => {
  const { userName } = req.body;
  const user = await db.User.findByPk(res.locals.user.id);
  if (userName) {
    user.userName = userName;
    await user.save();
  }
  res.render("account", { csrfToken: req.csrfToken(), user });
}))
router.post("/password", csrfProtection, asyncHandler(async (req, res, next) => {
  const { password, confirmPassword } = req.body;
  const user = await db.User.findByPk(res.locals.user.id);
  if ((password && confirmPassword) && (password === confirmPassword)) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
  }
  res.render("account", { csrfToken: req.csrfToken(), user });
}));
router.post("/bio", csrfProtection, asyncHandler(async (req, res, next) => {
  const { bio } = req.body;
  const user = await db.User.findByPk(res.locals.user.id);
  if (bio) {
    user.bio = bio;
    await user.save();
  }
  res.render("account", { csrfToken: req.csrfToken(), user });
}));
router.post("/profilepiclink", csrfProtection, asyncHandler(async (req, res, next) => {
  const { profilePicLink } = req.body;
  const user = await db.User.findByPk(res.locals.user.id);
  if (profilePicLink) {
    user.profilePicLink = profilePicLink;
    await user.save();
  }
  res.render("account", { csrfToken: req.csrfToken(), user });
}))

router.post("/delete", csrfProtection, asyncHandler(async (req, res, next) => {
  const { deleteAccount } = req.body;
  const user = await db.User.findByPk(res.locals.user.id);
  if (deleteAccount) {
    await user.destroy();
    logoutUser(req, res, user);
    res.redirect("../register");
  }
}))

module.exports = router;
