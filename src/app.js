// src/app.js
const express = require("express");
const { port } = require("./config/env");

// Importar todas las rutas de v1
const v1Routes = require("./routes/v1");

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Prefijo de la API v1 (esto incluye /users y /ejercicios)
app.use("/api/v1", v1Routes);

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
