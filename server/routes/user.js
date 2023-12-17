const express = require("express");
const router = express.Router();

const { login} = require("../controllers/Auth");
const { auth } = require("../middleware/auth");


router.post("/login", login);



module.exports = router;