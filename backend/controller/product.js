const ProductModel = require("../model/product");

// get product-
const getProduct = (req, res)=>{
    ProductModel.find().sort({ original_price: 'asc'}).limit(2).then(allproduct=>{
        console.log("get product")
        return res.send(allproduct)
    })
    .catch(error=>{
        console.log(error)
        return res.status(401).json({error: "OOP's something is wrong"})
    })
}


// add product-
const addProduct = async(req, res)=>{
    // check if all details are filled or not-
    const {category, title, original_price, discounted_price, images, details, rating } = req.body;
    if(!category || !title || !original_price || !discounted_price || !images || !details || !rating)
    {
        return res.status(422).json({error: "Please fill all details"})
    }

    const payload = req.body;
    try
    {
        const data = ProductModel(payload)
        await data.save();
        console.log("Successfully added product");
        return res.json({message: "Successfully added product"})
    }
    catch(error)
    {
        console.log(error);
        return res.status(422).json({error: "OOP's product not added"})
    }
}


// update product-
const upateProduct = async(req, res)=>{
    const payload = req.body;
    const {_id} = req.params;
    try
    {
        await ProductModel.findByIdAndUpdate({_id}, payload)
        console.log("Successfully updated product");
        return res.json({message: "Successfully updated product"})
    }
    catch(error)
    {
        console.log(error);
        return res.status(422).json({error: "OOP's product not updated"})
    }
}


// update-
const deleteProduct = async(req, res)=>{
    const {_id} = req.params;
    try
    {
        await ProductModel.findByIdAndDelete({_id})
        console.log("Successfully deleted product");
        return res.json({message: "Successfully deleted product"})
    }
    catch(error)
    {
        console.log(error);
        return res.status(422).json({error: "OOP's product not deleted"})
    }
}


// export-
module.exports = {getProduct, addProduct, upateProduct, deleteProduct};