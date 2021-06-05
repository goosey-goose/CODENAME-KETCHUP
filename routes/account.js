const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, requireAuth, logoutUser } = require('../auth');
const db = require('../db/models');

const router = express.Router();

router.get("/", restoreUser, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  res.render("account", { csrfToken: req.csrfToken() });
}));

router.post("/", csrfProtection, asyncHandler(async (req, res, next) => {
  const { deleteAccount, bio, profilePicLink } = req.body;
  const user = await db.User.findByPk(res.locals.user.id);
  //if (deleteAccount) {
  //  logoutUser(req, res);
  //  await user.destroy();
  //  res.redirect("/login");
  //}
  if (bio) {
    user.bio = bio;
    await user.save();
  }
  if (profilePicLink) {
    user.profilePicLink = profilePicLink;
    await user.save();
  }
  res.render("account", { csrfToken: req.csrfToken(), user });
}));

module.exports = router;
