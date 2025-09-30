// src/app.js
const express = require("express");
const usersRoutes = require("./routes/v1/users.routes");
const { port } = require("./config/env");

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Prefijo de la API
app.use("/api/v1/users", usersRoutes);

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Iniciar servidor aquí mismo
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
