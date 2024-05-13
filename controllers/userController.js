const User = require("../models/userModel");

module.exports.login = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const user = await User.findOne({ userId });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const {userId} = req.body;
    const userCheck = await User.findOne({ userId });
    if (userCheck)
      return res.json({ msg: "Username already used", status: false });
    const user = await User.create(req.body);
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ userId: { $ne: req.params.id } }).select([
      "username",
      "_id",
      "userId"
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};
