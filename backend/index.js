// import-
const express = require("express");
const dbConnection = require("./config/database");
const cors = require("cors");
const appRouter = require("./routes/app");
const mensRouter=require("./routes/mens_route")
const single_mensRouter=require("./routes/single_mens_route")

const app = express();
require("dotenv").config();
const PORT = 8000;

// middleware and router-
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", appRouter);
app.use("/men", mensRouter);
app.use("/men", single_mensRouter);

// port-
app.listen(PORT, async () => {
  try {
    await dbConnection;
    console.log(`PORT is successfully running on ${PORT}`);
    console.log("Db connected successfully");
  } catch (error) {
    console.log({ error: "OOP's something is wrong" });
    console.log(error);
  }
});
