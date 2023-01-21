const mongoose = require("mongoose");

// schema-
const productSchema = mongoose.Schema({
    category: {type:String, required: true},
    title: {type:String, required: true},
    original_price: {type:Number, required: true},
    discounted_price: {type:Number, required: true},
    images: {type:String, required: true},
    details: {type:String, required: true},
    rating: {type:String, required: true},
})

// model-
const ProductModel = mongoose.model("product", productSchema);

// export-
module.exports = ProductModel;