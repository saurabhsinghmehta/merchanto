const mongoose = require("mongoose");

// schema-
const registerVerifySchema = mongoose.Schema({
    userId : String,
    uniqueString : String,
    createdAt : Date,
    expiresAt : Date
})

// model-
const RegisterVerifyModel = mongoose.model("userVerify", registerVerifySchema);

// export-
module.exports = RegisterVerifyModel;