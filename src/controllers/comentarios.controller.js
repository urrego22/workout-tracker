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


module.exports = {
getComentarios,
  getComentarioById,
  createComentario,
  updateComentario,
  patchComentario,
  deleteComentario
};