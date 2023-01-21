// import-
const RegisterModel = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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
            // hash password and save it into the database-
            bcrypt.hash(password, 10)
            .then(hashedPassword=>{
                const userData = RegisterModel({name, email, phone, password: hashedPassword, verified : false});
                userData.save()
                .then(result=>{
                    if(result)
                    {
                        // send email-
                        var mailOptions = {
                            from: process.env.authMail,
                            to: email,
                            subject: 'Merchanto, successfully registeration!',
                            text: `Hi, ${name},You have successfully registered in merchanto.`
                          };
                          
                          transporter.sendMail(mailOptions, function(error, info){
                            if(error)
                            {
                              console.log(error);
                            }
                            else
                            {
                              console.log('Email sent: ' + info.response);
                              return res.json({message: "Successfully registered"})
                            }
                          });
                    }
                    else
                    {
                        res.json({error: "OOP's something is wrong"})
                    }
                })
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
    const {email, password} = req.body;

    // Checking, all the details-
    if(!email || !password)
    {
        return res.status(422).json({error: "Please fill all details"});
    }

    // varification with regex-
    const emailVarify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if(!(emailVarify))
    {
        res.status(422).json({error: "Email is not valid"});
        console.log("Email is not valid");
        return;
    }

    // Check, if user is registered or not-
    RegisterModel.findOne({email})
    .then(userData=>{
        // Check, if email is matched or not-
        if(!userData)
        {
            console.log("Email does not exist");
            return res.status(422).json({error: "Email does not exist"});
        }
        
        // Check if password is matched or not-
        const token = jwt.sign({_id:userData.id}, process.env.jwt_key, {expiresIn: "300s"})
        bcrypt.compare(password, userData.password)
        .then(user=>{
            user === true ? (res.json({token, user: userData.name, message: "Successfully loged in"})) : (res.status(404).json({error: "Password is not matching"}))
        })
        .catch(error=>{
            console.log(`error: ${error}`)
            res.status(404).json({error: "OOP's data not found"})
        })
        
    })
    .catch(error=>{
        res.json({error: "OOP's something went wrong"})
        console.log(`loginError : ${error}`)
    })
}



// export-
module.exports = {signUp, signIn};