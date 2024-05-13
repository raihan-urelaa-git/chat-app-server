const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
    },
    profilePicture: String,
    lastActive: String,
    inActive: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
