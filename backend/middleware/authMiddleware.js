// Middleware to verify JWT Token

const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Get token from headers

  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ message: "Access Denied, No Token Provided" });
  }

  const token = authHeader.split(" ")[1]; //Extracts token after "Bearer"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //Verify Token
    req.user = decoded; //Attach user info to request
    next();
  } catch (error) {
    return res.json({ message: "Invalid Token!" });
  }
};

module.exports = verifyToken;
