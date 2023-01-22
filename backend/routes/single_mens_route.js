// import-
const express = require("express");
const { single_men } = require("../controller/single_men");
const single_mensRouter = express.Router();

single_mensRouter.get("/:id", single_men);

// export-
module.exports = single_mensRouter;

