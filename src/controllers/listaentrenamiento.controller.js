
let listaentrenamiento = [
  {
    usuarioId: 1,
    entrenamientos: [
      {
        id: 101,
        titulo: "Rutina de brazo",
        fechaHora: "2025-09-20T08:00:00Z",
        estado: "pendiente"
      },
      {
        id: 102,
        titulo: "Rutina de pierna",
        fechaHora: "2025-09-21T09:00:00Z",
        estado: "completado"
      }
    ]
  }
];

// Métodos scaffold
const getListaEntrenamiento = (req, res) => {};
const getEntrenamientoById = (req, res) => {};
const createEntrenamiento = (req, res) => {};
const updateEntrenamiento = (req, res) => {};
const patchEntrenamiento = (req, res) => {};
const deleteEntrenamiento = (req, res) => {};

module.exports = {
  getListaEntrenamiento,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  patchEntrenamiento,
  deleteEntrenamiento
};
