require("dotenv").config();

const WomenModel = require("../model/women_model");
const women = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 0;
       const search = req.query.search || "";
    let sort = req.query.sort || "price";
    let category = req.query.category || "All";
    const categories = [
      "Dresses",
      "Sarees",
      "Home and Kitchen",
      "Bags and Footwear",
      "Beauty and health",
      "Women's Dress",
      "Jewellery",

    ];
    category === "All"
      ? (category = [...categories])
      : (category = req.query.category.split(","));


    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }


const womenProd = await WomenModel.find({
  title: { $regex: search, $options: "i" },
})
  .where("category")
  .in([...category])
  .sort(sortBy)
  .skip(page * limit)
  .limit(limit);

    res.status(200).json(womenProd);

  } catch (error) {
    console.log(`error : ${error}`);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = { women };
