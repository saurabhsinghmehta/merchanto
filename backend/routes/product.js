// import-
const express = require("express");
const { addProduct, getProduct, upateProduct, deleteProduct } = require("../controller/product");
const productRouter = express.Router();

// routes-
productRouter.get("/products", getProduct);
productRouter.post("/add-product", addProduct);
productRouter.patch("/update-product/:_id", upateProduct);
productRouter.delete("/delete-product/:_id", deleteProduct)

// export-
module.exports = productRouter;