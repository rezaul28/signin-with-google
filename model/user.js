var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  googleId : {
    type : String
  },
  fullname : {
    type : String
  },
  username: {
    type: String,
    require: true
  },
  password: {
    type: String
  },
  isAdmin : {
    type : Boolean,
    default : false
  }
});

module.exports = new mongoose.model("User", userSchema);
