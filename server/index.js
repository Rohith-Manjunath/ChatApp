const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dbConnection = require("./config/dbConnection");
const { PORT, MONGODB_URI } = process.env;

app.use(
  express.json({
    limit: "100mb",
  })
);

app.use(cookieParser());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

dbConnection(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
