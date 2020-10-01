const express = require('express')
const app = express()
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup');
var mongoose = require("mongoose");
const router = express.Router();
const User = require('../model/user');

// Auth Routes
module.exports.cbFromGoogle = function(req, res) {
  // Successful authentication, redirect home.
  res.send(req.user);
}


app.get('/logout', (req, res) => {
  req.session = null;
  res.send("Successful");
})
