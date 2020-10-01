const express = require('express');
const router = express.Router();
const googlelogin = require('./controller/googleLogin');
const passport = require('passport');

router.use(passport.initialize());
router.use(passport.session());

router.get('/auth/google',passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/secrets', passport.authenticate('google', { failureRedirect: '/failed' }),googlelogin.cbFromGoogle)
module.exports = router;
