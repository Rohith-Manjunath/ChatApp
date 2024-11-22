const mongoose = require("mongoose");
const dbConnection = (URI) => {
  mongoose
    .connect(URI)
    .then(() => console.log("Database connection established"))
    .catch((e) => console.log("Error connecting", e.message));
};

module.exports = dbConnection;
