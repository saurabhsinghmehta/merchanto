const RegisterModel = require("../model/auth");

const otpVerification = (req, res)=> {
    const {phone} = req.body;
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
        const randomOtp = Math.floor(100000 + Math.random() * 900000);
        const {phone} = result;
        res.json({message: randomOtp})
       }
    })
    .catch(error=>{
        console.log(error)
    })
}

module.exports = {otpVerification};