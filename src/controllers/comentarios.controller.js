// src/controllers/comentarios.controller.js

// Estado en memoria (simulación)
let comentarios = [
  {
    id: "301",
    entrenamientoId: "101",
    comentario: "Muy buen rendimiento en la última serie.",
    fecha: "2025-09-20T09:15:00Z"
  }
];

const getComentarios = (req, res) => {
  res.status(200).json(comentarios);
};

const getComentarioById = (req, res) => {
  const { id } = req.params;
  const comentario = comentarios.find(c => c.id === id);

  if (!comentario) {
    return res.status(404).json({ error: "Comentario no encontrado" });
  }

  res.status(200).json(comentario);
};

const createComentario = (req, res) => { 
     const { entrenamientoId, comentario, fecha } = req.body;

  if (!entrenamientoId || !comentario) {
    return res.status(400).json({ error: "entrenamientoId y comentario son requeridos" });
  }

  const newComentario = {
    id: `${Date.now()}`,
    entrenamientoId,
    comentario,
    fecha: fecha || new Date().toISOString()
  };

  comentarios.push(newComentario);
  res.status(201).json(newComentario);
 };

 
const updateComentario = (req, res) => {  };
const patchComentario = (req, res) => {  };
const deleteComentario = (req, res) => {  };



module.exports = {
  getComentarios,
  getComentarioById,
  createComentario,
  updateComentario,
  patchComentario,
  deleteComentario
};