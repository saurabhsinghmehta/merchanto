// import-
const express = require("express");
const { single_women } = require("../controller/single_women");
const single_women_router = express.Router();

single_women_router.get("/:id", single_women);

// export-
module.exports = single_women_router;
