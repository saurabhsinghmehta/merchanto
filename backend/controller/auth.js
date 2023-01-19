// import-
const RegisterModel = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {v4 : uuidv4} = require("uuid");
const RegisterVerifyModel = require("../model/authVerification");
require("dotenv").config();


// nodemailer stuff-
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.authMail,
        pass: process.env.authPassword
    }
})
transporter.verify((error, success)=>{
    if(error)
    {
        console.log(`error: ${error}`);
        console.log("transporter nodemail verification failed");
    }
    else
    {
        console.log(`message : ${success}`)
        console.log("Nodemailer is ready for message");
    }
})

// signUp-
const signUp = (req, res)=>{
    const {name, email, phone, password} = req.body;
    
    // check for all fields-
    if(!name || !email || !phone ||!password)
    {
        return res.status(422).json({error: "Please fill all details"});
    }

    // varification with regex code-
    const emailVarify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const passwordVarify = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);
    const phoneVarify = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
    
    if(!emailVarify)
    {
        return res.status(422).json({error: "Please fill valid email address"});
    }
    if(!phoneVarify)
    {
        return res.status(422).json({error: "Please fill valid mobile number"});
    }
    if(!passwordVarify)
    {
        return res.status(422).json({error : "Password should contain 1 lowercase, 1 upercase, 1 numeric character, 1 special character and atleast 8 characters"});
    }

    // check if user already exsit or not-
    RegisterModel.findOne({$or: [{email}, {phone}]})
    .then(existingUser=>{
        if(existingUser)
        {
            return res.status(422).json({error: "User already exists with email or phone number"});
        }
        else
        {
            bcrypt.hash(password, 10)
            .then(hashedPassword=>{
                const userData = RegisterModel({name, email, phone, password: hashedPassword, verified : false});
                userData.save()
                .then(result=>{
                    if(result)
                    {
                        res.json({message: "Successfully registered"})
                    }
                    else
                    {
                        res.json({error: "OOP's something is wrong"})
                    }
                })
                    // .then((result)=>{
                    //     // account verification-
                    //     sendVerificationEmail(result, res)
                    // })
                    // .catch((error=>{
                    //     res.json({message: "An error occured while saving the data"})
                    // }))
            })
        }
    })
    .catch(error=>{
        console.log(`error : ${error}`);
        console.log({error: "OOP's something went wrong"})
    })
}


// signIn-
const signIn = (req, res)=>{
    const {email, password} = req.body
    RegisterModel.find({email}).then(userData=>{
        if(!userData)
        {
            res.json({error: "OOP's you are not registered"})
        }
        else
        {
            console.log(userData)
            bcrypt.compare(password, userData[0].password, (err, matched_password)=>{
                if(!matched_password)
                {
                    res.json({error: err})
                }
                else
                {
                    const token = jwt.sign(password, "social_media_app");
                    res.json({"message": "Successfully loged in", token})
                    console.log("Successfully loged in");
                }
            })
        }
    })
}



// export-
module.exports = {signUp, signIn};