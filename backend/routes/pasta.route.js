const express = require("express");
const { apanharPastas, adicionarPasta, removerPasta, atualizarPasta } = require("../controllers/pasta.controller");
const multer = require("../middlewares/multer");

const router = express.Router();

router.get("/", apanharPastas);
router.post(
   "/adicionar",
   multer.fields([
      { name: "foto", maxCount: 1 },
      { name: "previas", maxCount: 10 },
   ]),
   adicionarPasta
);
router.delete("/remover/:id", removerPasta);
router.patch("/atualizar/:id", atualizarPasta);

module.exports = router;
