const express = require('express');
const router = express.Router();

//Implementacion versiones de rutas
const v1Routes = require('./v1');


//Ruta base para informacion de la API
router.get('/', (req, res) => {
    res.json({
        menssage: 'Workout Tracker API',
        versions: ['v1'],
        endpoints: {
            v1: '/api/v1'
        }
    });
});

// Usar las rutas de v1 con prefijo /v1
router.use('/v1', v1Routes);

module.exports = router;

