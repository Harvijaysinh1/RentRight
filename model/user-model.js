const mongoose = require("mongoose");

//schema

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "role",
  },
});



//model

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
