const mongoose = require("mongoose");

// schema-
const WomenSchema = mongoose.Schema({
  image: String,
  title: String,
  original_price: Number,
  price: Number,
  rating: Number,
  category: String,
  discounted_price: Number,
});

// model-
const WomenModel = mongoose.model("womendatas", WomenSchema);

// export-
module.exports = WomenModel;
