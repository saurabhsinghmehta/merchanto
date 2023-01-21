require("dotenv").config();

const MensModel = require("../model/mens_model");
const mens = async (req, res) => {
  try {
   
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 0;
    const search = req.query.search || "";
    let sort = req.query.sort || "price";
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }
    const mensProd = await MensModel.find({ $regex: search, $options: "i" })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    res.status(200).json(mensProd);
  } catch (error) {
    console.log(`error : ${error}`);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = { mens };
