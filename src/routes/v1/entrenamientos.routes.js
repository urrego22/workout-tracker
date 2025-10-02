const express = require("express");
const {
  getEntrenamientos,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  patchEntrenamiento,
  deleteEntrenamiento
} = require("../../controllers/entrenamientos.controller");

const router = express.Router();

router.get("/", getEntrenamientos);
router.get("/:id", getEntrenamientoById);
router.post("/", createEntrenamiento);
router.put("/:id", updateEntrenamiento);
router.patch("/:id", patchEntrenamiento);
router.delete("/:id", deleteEntrenamiento);

module.exports = router;
