const express = require("express");
const {
  getComentarios,
  getComentarioById,
  createComentario,
  updateComentario,
  patchComentario,
  deleteComentario
} = require("../../controllers/comentarios.controller");

const router = express.Router();

// Definición de rutas
router.get("/", getComentarios);
router.get("/:id", getComentarioById);
router.post("/", createComentario);
router.put("/:id", updateComentario);
router.patch("/:id", patchComentario);
router.delete("/:id", deleteComentario);

module.exports = router;
