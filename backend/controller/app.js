require("dotenv").config();
const fs = require("fs");
const AppModel = require("../model/app_model");
const home = async (req, res) => {
  // const {image,title,mrp,price,rating,category,discount}=req.body
// const genre=req.query
try{
const home_prod= await AppModel.find()
res.send(home_prod)
}catch(error){
    console.log(`error : ${error}`);
      console.log({ error: "OOP's something went wrong" });
res.send("errr");
}
}


module.exports = { home };
  // image: String,
  // title: String,
  // mrp: Number,
  // price: Number,
  // rating: Number,
  // category:String,
  // discount:Number