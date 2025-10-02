const express = require("express");
const {
  getProgramaciones,
  getProgramacionById,
  createProgramacion,
  updateProgramacion,
  patchProgramacion,
  deleteProgramacion
} = require("../../controllers/programacion.controller");

const router = express.Router();

router.get("/", getProgramaciones);
router.get("/:id", getProgramacionById);
router.post("/", createProgramacion);
router.put("/:id", updateProgramacion);
router.patch("/:id", patchProgramacion);
router.delete("/:id", deleteProgramacion);

module.exports = router;
