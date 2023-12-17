const User = require("../models/User");
require("dotenv").config();


exports.login = async (req, res) => {
  try {

    console.log("entered in login");
    const { username, password } = req.body;
    console.log(req.body);

    // save the entry in database
    const user = await User.create({
      username,
      password,
    });

    console.log("user logged in");

    // Return 201 Created status code with success message
    return res.status(201).json({
      success: true,
      user,
      message: `User Created Successfully`,
    });

  
  } catch (error) {
    console.error(error);
    // Return 500 Internal Server Error status code with error message
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    });
  }
};
