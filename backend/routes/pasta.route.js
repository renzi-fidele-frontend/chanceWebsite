const express = require("express");
const { apanharPastas, adicionarPasta, removerPasta, atualizarPasta } = require("../controllers/pasta.controller");

const router = express.Router();

router.get("/", apanharPastas);
router.post("/adicionar", adicionarPasta);
router.delete("/remover/:id", removerPasta);
router.patch("/atualizar/:id", atualizarPasta);

module.exports = router;
