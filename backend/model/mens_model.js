const mongoose = require("mongoose");

// schema-
const MensSchema = mongoose.Schema({
  image: String,
  title: String,
  mrp: Number,
  price: Number,
  rating:Number,
  category:String,
  discount: Number
});

// model-
const MensModel = mongoose.model("mendatas", MensSchema);

// export-
module.exports = MensModel;


// image;
// title;
// mrp;
// price;
// rating;
// category;
// discount;