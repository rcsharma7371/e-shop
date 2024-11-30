const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  cart: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  order: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
],
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
