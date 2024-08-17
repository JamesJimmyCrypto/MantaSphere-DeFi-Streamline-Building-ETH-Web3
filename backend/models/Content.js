const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contentURL: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", ContentSchema);
