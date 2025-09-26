const express = require('express');
const router = express.Router();

//GET /api7V17users
router.get('/', (req, res) => {
    res.send('Get all users');
});

module.exports = router;