const mongoose = require("mongoose");

const { Schema } = mongoose;
const historySchema = new Schema({
  query: {
    type: String,
    required: true,
  },
  creatAt: {
    type: Date,
    defalt: Date.now,
  },
});

module.exports = mongoose.model("History", historySchema);
