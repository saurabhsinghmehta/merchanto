const mongoose = require("mongoose");

// schema-
const ProductSchema = mongoose.Schema({
  image: String,
  title: String,
  mrp: Number,
  price: Number,
  discount:Number
});

// model-
const AppModel = mongoose.model("hproducts", ProductSchema);

// export-
module.exports = AppModel;


