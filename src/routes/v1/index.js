const express = require('express');
const router = express.Router();

//Importar rutas especificas
const usersRoutes = requiere('./users.routes');


//Configuracion de rutas
router.use('/users', usersRoutes);

module.exports = router;