// import-
const express = require("express");
const { home } = require("../controller/app");
const appRouter = express.Router();


appRouter.get("/data", home);

// export-
module.exports = appRouter;

