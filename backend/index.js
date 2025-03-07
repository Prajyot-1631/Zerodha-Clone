require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const addTempHoldings = require("./Routes/tempHoldings");
const addTempPositions = require("./Routes/tempPositions");
const addNewOrder = require("./Routes/newOrderRoute");
const signupRoute = require("./Auth/Signup");
const loginRoute = require("./Auth/Login");
const verifyToken = require("./middleware/authMiddleware");

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API Route to add Dummy Holdings to DB
app.use("/addHoldings", addTempHoldings);

// Fetch allHoldings from DB
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({}); //MongoDB command to Search/Fetch Data
  res.json(allHoldings); //returns allHoldings data in Json format
});

// API Route to add Dummy Positions to DB
app.use("/addPositions", addTempPositions);

// Fetch allPositions from DB
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({}); //MongoDB command to Search/Fetch Data
  res.json(allPositions);
});

// API Route to post newOrder into DB (buy/sell from watchlist)
app.use("/newOrder", addNewOrder);

//Fetch allOrders from DB
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

// Signup Route
app.use("/signup", signupRoute);

// Login Route
app.use("/login", loginRoute);

// Auth JWT (testing protected routes)
app.get("/Auth", verifyToken, (req, res) => {
  console.log("Decoded User:", req.user);
  res.json({ message: `Welcome to the protected route !`, user: req.user });
});

app.listen(PORT, () => {
  console.log("server started");
  mongoose.connect(URI);
  console.log("DB Connected");
});
