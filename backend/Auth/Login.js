// API route for logging in user [LOGIN]
const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");
const bcrypt = require("bcrypt");

const router = express.Router();
const SECRET_KEY = "MySuperSecretKey";

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    //1. check email and password are entered
    if (!email || !password) {
      return res.json({ message: "Email and Password are required!" });
    }

    //2. Check if user exists in DB
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.json({ message: "Invalid Email or Password!" });
    }

    //3. Check if password matches hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid email or password!" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return res.json({ messsage: `Welcome ${user.username}`, token: token });
    console.log(token);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
});

module.exports = router;

// Initial Login Setup
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   let loggedinUser = await UserModel.findOne({
//     email: email,
//     password: password,
//   });
//   res.send(loggedinUser.username);
//   console.log("logged in successfully");
// });
