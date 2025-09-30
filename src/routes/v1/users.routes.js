// src/routes/v1/users.routes.js
const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../../controllers/users.controller");

const router = express.Router();

// Definición de rutas
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
