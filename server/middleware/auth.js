const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const User = require("../models/User")
dotenv.config()

exports.auth = async (req, res, next) => {
  try {
    
    console.log("inside middleware");
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
    })
  }
}