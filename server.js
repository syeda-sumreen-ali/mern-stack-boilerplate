const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// IMPORTING DATABASE
const db = require("./config/key").mongoURI;

// CONNECTING DATABASE
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(`Database connection failed \n Error:${err}`));

// DECLARE ROUTES
const items = require("./routes/api/items");

// APPLYING MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// USE ROUTES
app.use("/api/items", items);

// RUNNING SERVER
app.listen(port, () => console.log(`Server is Running on port: ${port} `));
