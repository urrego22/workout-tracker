const express = require('express');
const router = express.Router();

//Importar rutas especificas
const usersRoutes = require('./users.routes');
const ejerciciosRoutes = require("./ejercicios.routes");


//Configuracion de rutas
router.use('/users', usersRoutes);
router.use("/ejercicios", ejerciciosRoutes);

module.exports = router;