const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const pastaRoute = require("./routes/pasta.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pasta", pastaRoute);

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME }).then(() => {
   console.log("Conectado ao MONGO DB!!!");
   app.listen(process.env.PORT);
});
