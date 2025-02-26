require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
  console.log("server started");
  mongoose.connect(URI);
  console.log("DB Connected");
});
