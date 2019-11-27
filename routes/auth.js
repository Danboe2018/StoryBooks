const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google',
  { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
  });

router.get('/verify', (res, req) => {
  if (req.user) {

  } else {

  }
});

// Logout User
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;