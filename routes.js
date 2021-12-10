const express = require("express");
const multer = require("multer");

const ProdutosController = require("./controllers/produtos");
const FornecedoresController = require("./controllers/fornecedores");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/produtos", ProdutosController.findAll);
router.get("/produtos/:id", ProdutosController.findOne);
router.post("/produtos", upload.single("imagem"), ProdutosController.create);
router.patch("/produtos/:id", ProdutosController.update);
router.delete("/produtos/:id", ProdutosController.destroy);

router.get("/fornecedores", FornecedoresController.findAll);
router.get("/fornecedores/:id", FornecedoresController.findOne);
router.post("/fornecedores", FornecedoresController.create);
router.put("/fornecedores/:id", FornecedoresController.update);
router.delete("/fornecedores/:id", FornecedoresController.destroy);

module.exports = router;