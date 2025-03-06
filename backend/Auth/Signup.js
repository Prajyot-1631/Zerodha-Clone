//API route for saving User Credentials [SIGNUP]

const express = require("express");
const { UserModel } = require("../model/UserModel");
const bcrypt = require("bcrypt");

const router = express.Router(); //used because we moved the code from index.js to a separate file

router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //bcrypt method for hashing password

    let newUser = await UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ message: "New user created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
  }
});

module.exports = router;

// initial setup of Signup
// app.post("/signup", async (req, res) => {
//   let newUser = new UserModel({
//     username: "test4",
//     email: "test4@gmail.com",
//     password: "test_4",
//   });

//   newUser.save();
//   console.log("user Saved");
//   res.send("User saved successfully");
// });
