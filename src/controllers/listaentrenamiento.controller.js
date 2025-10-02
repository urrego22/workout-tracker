
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
const getListaEntrenamiento = (req, res) => {
     res.status(200).json(listaentrenamiento);
};

const getEntrenamientoById = (req, res) => {
 const { id } = req.params;
  const usuario = listaentrenamiento.find(e =>
    e.entrenamientos.some(ent => ent.id === parseInt(id))
  );

  if (!usuario) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  const entrenamiento = usuario.entrenamientos.find(ent => ent.id === parseInt(id));
  res.status(200).json(entrenamiento);
};

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
