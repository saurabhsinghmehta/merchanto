
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', true);
// database connection-
const dbConnection = mongoose.connect(process.env.mongoUrl);

// export-
module.exports = dbConnection;

