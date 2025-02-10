const Pasta = require("../models/Pasta.model");

const apanharPastas = async (req, res) => {
   try {
      const pastas = await Pasta.find();
      res.json({ pastas });
   } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar pasta" });
   }
};

const adicionarPasta = async (req, res) => {
   // TODO: Adicionar funcionalidade de adicionar pasta ao DB
   const foto = req.files["foto"][0];
   let previas = req.files["previas"];
   console.log(foto);
   console.log(previas);
};

const removerPasta = (req, res) => {
   // TODO: Adicionar funcionalidade de remover uma pasta do DB
};

const atualizarPasta = (req, res) => {
   // TODO: Adicionar funcionalidade de editar uma pasta no DB
};

exports.apanharPastas = apanharPastas;
exports.adicionarPasta = adicionarPasta;
exports.removerPasta = removerPasta;
exports.atualizarPasta = atualizarPasta;
