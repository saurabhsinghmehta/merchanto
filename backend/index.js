// import-
const express = require("express");
const dbConnection = require("./config/database");
const authRouter = require("./routes/auth");
const cors = require("cors");
const appRouter = require("./routes/app");
const app = express();
require("dotenv").config();
const PORT = 8000

// middleware and router-
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use("/auth", authRouter);
app.use("/", appRouter)

// port-
app.listen(PORT, async()=>{
    try
    {
        await dbConnection
        console.log(`PORT is successfully running on ${PORT}`);
        console.log("Db connected successfully");
    }
    catch(error)
    {
        console.log({error: "OOP's something is wrong"});
        console.log(error)
    }
})
