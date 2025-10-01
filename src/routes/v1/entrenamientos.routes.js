const express = require("express");
const {
  getEntrenamientos,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  deleteEntrenamiento
} = require("../../controllers/entrenamientos.controller");

const router = express.Router();

router.get("/", getEntrenamientos);
router.get("/:id", getEntrenamientoById);
router.post("/", createEntrenamiento);
router.put("/:id", updateEntrenamiento);
router.delete("/:id", deleteEntrenamiento);

module.exports = router;
