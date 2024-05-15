const Conversations = require("../models/conversationModel");

module.exports.createConversation = async (req, res, next) => {
  try {
    const { users } = req.body;

    //   const userCheck = await User.findOne({ userId });
    //   if (userCheck)
    //     return res.json({ msg: "Username already used", status: false });
    const user =await ( await Conversations.create({ users })).populate('users');
    
    return res.json({ status: true, user:user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllConversation = async (req, res, next) => {
  try {
    
    const conversations = await Conversations.find({
      users: req.params.id,
    }).populate("users");
    
    return res.json(conversations);
  } catch (ex) {
    next(ex);
  }
};
