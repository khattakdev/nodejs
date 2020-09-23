const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Default Name",
  },

  pass: {
    type: String,
    required: true,
    default: "",
  },
});
module.exports = mongoose.model("User", userSchema);
