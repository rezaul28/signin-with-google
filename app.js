const express = require('express')
var mongoose = require("mongoose");
const app = express()
const route = require("./route");
mongoose.connect('mongodb+srv://reza:105796@cluster0.ywkip.mongodb.net/testgoogle', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  //useUnifiedTopology: true
});
app.use(route)
app.listen(3000);
