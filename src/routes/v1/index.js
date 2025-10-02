const express = require('express');
const router = express.Router();

//Importar rutas especificas
const usersRoutes = require('./users.routes');
const ejerciciosRoutes = require("./ejercicios.routes");
const entrenamientosRoutes = require("./entrenamientos.routes");
const programacionRoutes = require("./programacion.routes");
const listaentrenamiento = require("./listaentrenamiento.routes");
const comentarios = require("./comentarios.routes");
const reportes = require("./reportes.routes");

//Configuracion de rutas
router.use('/users', usersRoutes);
router.use("/ejercicios", ejerciciosRoutes);
router.use("/entrenamientos", entrenamientosRoutes);
router.use("/programacion", programacionRoutes);
router.use("/listaentrenamiento", listaentrenamiento);
router.use("/comentarios", comentarios);
router.use("/reportes", reportes);

module.exports = router;