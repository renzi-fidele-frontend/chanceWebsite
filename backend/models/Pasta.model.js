const mongoose = require("mongoose");

const schemaDaPasta = new mongoose.Schema({
   titulo: { type: String, required: true, unique: true },
   foto: { type: String, required: true },
   preco: { type: Number, required: true },
   download: { type: Number, required: true },
   descricao: { type: String, required: true },
   link: { type: String, required: true },
   previas: { type: Array, required: true },
}, {collection: "Pastas"});

const Pasta = mongoose.model("Pasta", schemaDaPasta);

module.exports = Pasta;
