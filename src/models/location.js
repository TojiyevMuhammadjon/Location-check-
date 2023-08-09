const { Schema, model } = require("mongoose");

const Location = new Schema(
  {
    distance: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Dates", Location)