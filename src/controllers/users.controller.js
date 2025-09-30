// src/controllers/users.controller.js

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

// Obtener todos los usuarios con filtros
const getUsers = (req, res) => {
  const { role, search } = req.query;
  let result = users;

  if (role) {
    result = result.filter(u => u.role === role);
  }

  if (search) {
    result = result.filter(u =>
      u.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// Obtener un usuario por ID
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.status(200).json(user);
};

// Crear un nuevo usuario
const createUser = (req, res) => {
  const { nombre, correo, pesok, edad, role } = req.body;

  if (!nombre || !correo) {
    return res.status(400).json({ error: "Nombre y correo son requeridos" });
  }

  const newUser = {
    id: `${Date.now()}`,
    nombre,
    correo,
    pesok,
    edad,
    role: role || "user",
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Actualizar un usuario
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, correo, pesok, edad, role } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  if (!nombre || !correo) {
    return res.status(400).json({ error: "Nombre y correo son requeridos" });
  }

  users[index] = { ...users[index], nombre, correo, pesok, edad, role };
  res.status(200).json(users[index]);
};

// Eliminar un usuario
const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const deletedUser = users.splice(index, 1);
  res.status(200).json({ deleted: deletedUser[0].id });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
