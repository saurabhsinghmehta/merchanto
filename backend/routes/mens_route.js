// import-
const express = require("express");
const { mens } = require("../controller/mens");
const mensRouter = express.Router();

mensRouter.get("/men", mens);

// export-
module.exports = mensRouter;
