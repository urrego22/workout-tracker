// src/routes/v1/listaentrenamiento.routes.js
const express = require("express");
const {
  getListaEntrenamiento,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  patchEntrenamiento,
  deleteEntrenamiento
} = require("../../controllers/listaentrenamiento.controller");

const router = express.Router();

router.get("/", getListaEntrenamiento);
router.get("/:id", getEntrenamientoById);
router.post("/", createEntrenamiento);
router.put("/:id", updateEntrenamiento);
router.patch("/:id", patchEntrenamiento);
router.delete("/:id", deleteEntrenamiento);

module.exports = router;
