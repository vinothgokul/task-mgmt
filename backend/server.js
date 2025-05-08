const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const authRoutes = require("./routers/authRoutes");
const taskRoutes = require("./routers/taskRoutes");

app.use(authRoutes);
app.use(taskRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("DB Connection Success");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});
