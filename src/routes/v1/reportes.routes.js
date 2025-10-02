const express = require("express");
const {
  getReportes,
  getReporteByUsuario,
  createReporte,
  updateReporte,
  patchReporte,
  deleteReporte
} = require("../../controllers/reportes.controller");

const router = express.Router();

// Definición de rutas
router.get("/", getReportes);
router.get("/:usuarioId", getReporteByUsuario);
router.post("/", createReporte);
router.put("/:usuarioId", updateReporte);
router.patch("/:usuarioId", patchReporte);
router.delete("/:usuarioId", deleteReporte);

module.exports = router;
