require("dotenv").config();
const MensModel = require("../model/mens_model");

const single_men = async (req, res) => {
    const id=req.params.id
  try {
  const single_prod=await MensModel.find({_id:id})

    res.status(200).json(single_prod);
  } catch (error) {
    console.log(`error : ${error}`);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = { single_men };
