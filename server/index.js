const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database")




const userRoutes = require("./routes/user")




const PORT = process.env.PORT || 4000;
database.connect()





app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
)

app.use("/api/v1/auth", userRoutes)


// Testing the server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
