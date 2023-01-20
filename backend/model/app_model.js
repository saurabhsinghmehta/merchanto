const mongoose = require("mongoose");

// schema-
const ProductSchema = mongoose.Schema({
  image: String,
  title: String,
  mrp: Number,
  price: Number,
  rating: Number,
  category:String,
  discount:Number
});

// model-
const AppModel = mongoose.model("homedatas", ProductSchema);

// export-
module.exports = AppModel;

// {
        
//         "category": "Sarees",
//         "title": "WETLESS RAINBOW ZARI",
//         "original_price" : 416,
//         "discounted_price": 316,
//         "sizes": [
//             "Free Size"
//         ],
//         "images": ["https://images.meesho.com/images/products/72024275/9cvk9_512.jpg"
//         ],
//         "details": {
//             "Fabric" : "Chiffon",
//             "Pattern" : "Self Design",
//             "Multipack" : "Single",
//             "Description": "Best qaualtiy "
//         },
//         "rating": 3.9,
//         "seller_id": 1 
//     }