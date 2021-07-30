const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => {
    console.log("db connected succesfully");
  }
);
