// import-
const express = require("express");
const { signUp, emailVerification, signIn } = require("../controller/auth");
const { otpVerification } = require("../controller/otp");
const authRouter = express.Router();

// router-
authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/phonenumber", otpVerification);
// authRouter.get("/verify/:userId/:uniqueString", emailVerification)

// export-
module.exports = authRouter;