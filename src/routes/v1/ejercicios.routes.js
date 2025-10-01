const express = require("express");
const {
  getEjercicios,
  getEjercicioById,
  createEjercicio,
  updateEjercicio,
  patchEjercicio,
  deleteEjercicio
} = require("../../controllers/ejercicios.controller");

const router = express.Router();

// Definición de rutas
router.get("/", getEjercicios);
router.get("/:id", getEjercicioById);
router.post("/", createEjercicio);
router.put("/:id", updateEjercicio);
router.patch("/:id", patchEjercicio);
router.delete("/:id", deleteEjercicio);

module.exports = router;

