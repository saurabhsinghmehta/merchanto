const RegisterModel = require("../model/auth");
require("dotenv").config();
const jwt = require("jsonwebtoken")

const otpVerification = (req, res)=> {
    const {phone} = req.body;
    // check if phone number is filled or not-
    if(!phone)
    {
        return res.json({error: "Please fill valid mobile number"});
    }

    // check if user is already registered or not-
    RegisterModel.findOne({phone})
    .then(result=>{
       if(!result)
       {
        console.log("This mobile number is not registerd, please try again with registered mobile number")
        return res.json({error: "This mobile number is not registerd, please try again with registered mobile number"})
       }
       else
       {
        // randomOtp, phone and options-
        const {_id} = result;
        const token = jwt.sign({_id}, process.env.jwt_key, {expiresIn: "300s"})
        const randomOtp = Math.floor(100000 + Math.random() * 900000);
        res.json({OTP: `${randomOtp}`, token, user: result.name})
       }
    })
    .catch(error=>{
        console.log(error)
    })
}


module.exports = {otpVerification};