const mongoose = require("mongoose");
const Joi = require("joi");
const { func } = require("joi");

const userSchema = new mongoose.Schema({
  fname: String,
  email: String,
  password: String,
});

// Its a static Method which can be called as user.doStuff();
userSchema.statics.getUserById = async function (userId) {
  let user = await UserModel.findById(userId).select("id fname password");
  return user;
};

userSchema.statics.getAllUsers = async function () {
  var result = [];
  const User = await UserModel.find();
  User.forEach(function (doc, err) {
    doc = { ...doc._doc };
    delete doc["password"];
    result.push(doc);
  });
  return result;
};

userSchema.statics.getUserByFieldPassword = async function (data) {
  console.log(data);
  const User = await UserModel.findOne({
    email: data.email,
    password: data.password,
  });
  return {
    _id: User.id,
    fname: User.fname,
    lname: User.lname,
    role: User.role,
    pic: User.pic,
    gender: User.gender,
  };
};

userSchema.methods.addUser = async function (data) {
  // Add user
  console.log("user")
  const user_Obj = new UserModel({
    fname: data.name,
    email: data.email,
    password: data.password,
  });

  const user = await user_Obj.save();
  console.log("User Saved")
  return {
    _id: user._id,
    fname: user.fname,
  };
};

userSchema.set("toJSON", { virtuals: true });
const UserModel = mongoose.model("userDb", userSchema);
module.exports = UserModel;
