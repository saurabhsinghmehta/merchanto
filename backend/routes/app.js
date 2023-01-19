// import-
const express = require("express");
const { home } = require("../controller/app");
const appRouter = express.Router();

appRouter.get("/", home)

// export-
module.exports = appRouter;