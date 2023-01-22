require("dotenv").config();
const WomenModel = require("../model/women_model");

const single_women = async (req, res) => {
  const id = req.params.id;
  try {
    const single_prod = await WomenModel.find({ _id: id });

    res.status(200).json(single_prod);
  } catch (error) {
    console.log(`error : ${error}`);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = { single_women };
