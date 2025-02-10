const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", (req, res) => {
   res.json("Funcionando");
});

mongoose.connect(process.env.MONGO_URL).then(() => {
   console.log("Conectado ao MONGO DB!!!");
   app.listen(process.env.PORT);
});
