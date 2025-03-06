const express = require("express");
const { OrdersModel } = require("../model/OrdersModel");
const router = express.Router();

//1.Read details from req(watchlist)
//2.Create new order on basis of that detail
//3.store/insert it in DB
router.post("/", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty, //read from the user
    price: req.body.price, //read from the user
    mode: req.body.mode,
  });

  newOrder.save();
  console.log("order saved");
  res.send("Order Saved");
});

module.exports = router;
