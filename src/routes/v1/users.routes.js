const express = require('express');
const router = express.Router();


// Estado en memoria (simulación)
let users = [
  {
    id: "1",
    nombre: "Sara Garcia",
    correo: "urregosara984.com",
    pesok: 60,
    edad: 20,
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];


//GET /api7V17users
router.get('/', (req, res) => {
   res.status(200).json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;   // 1
  const user = users.find(u => u.id === id);   // 2

  if (!user) {   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);   // 4
});

// POST /users
router.post('/', (req, res) => {
  const { nombre, correo, pesok, edad, role } = req.body;   // 1

  if (!nombre || !correo) {   // 2
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  const newUser = {   // 3
    id: `${Date.now()}`,  // identificador temporal
    nombre,
    correo,
    pesok,
    edad,
    role: role || 'user',  // valor por defecto si no envían rol
    createdAt: new Date().toISOString()
  };

  users.push(newUser);   // 4

  res.status(201).json(newUser);   // 5
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;              // 1
  const { nombre, correo, pesok, edad, role } = req.body; // 2

  const index = users.findIndex(u => u.id === id); // 3
  if (index === -1) {                     // 4
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!nombre|| !correo) {                  // 5
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  users[index] = {                        // 6
    ...users[index], // conserva los datos previos
    nombre,
    correo,
    pesok,
    edad,
    role
  };

  res.status(200).json(users[index]);     // 7
});





module.exports = router;