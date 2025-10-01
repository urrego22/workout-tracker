const express = require("express");
const {
  getEjercicios,
  getEjercicioById,
  createEjercicio,
  updateEjercicio,
  deleteEjercicio
} = require("../../controllers/ejercicios.controller");

const router = express.Router();

// Definición de rutas
router.get("/", getEjercicios);
router.get("/:id", getEjercicioById);
router.post("/", createEjercicio);
router.put("/:id", updateEjercicio);
router.delete("/:id", deleteEjercicio);

module.exports = router;
