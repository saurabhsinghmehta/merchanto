// import-
const express = require("express");
const { mens } = require("../controller/mens");
const mensRouter = express.Router();

mensRouter.get("/", mens);

// export-
module.exports = mensRouter;
