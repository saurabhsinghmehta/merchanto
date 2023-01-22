// import-
const express = require("express");
const { women } = require("../controller/women");
const womenRouter = express.Router();

womenRouter.get("/women", women);

// export-
module.exports = womenRouter;
