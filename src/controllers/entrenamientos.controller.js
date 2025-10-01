// Estado en memoria (simulación)
let entrenamientos = [
  {
    id: "501",
    entrenamientoId: 101,
    ejercicioId: 3001,
    series: 3,
    repeticiones: 12,
    peso: 40
  }
];

// Controladores base
const getEntrenamientos = (req, res) => {
  res.status(200).json(entrenamientos);
};

const getEntrenamientoById = (req, res) => {
  const { id } = req.params;
  const entrenamiento = entrenamientos.find(e => e.id === id);
  if (!entrenamiento) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }
  res.status(200).json(entrenamiento);
};

const createEntrenamiento = (req, res) => {
  res.status(201).json({ msg: "Crear entrenamiento (pendiente)" });
};

const updateEntrenamiento = (req, res) => {
  res.status(200).json({ msg: "Actualizar entrenamiento (pendiente)" });
};

const deleteEntrenamiento = (req, res) => {
  res.status(200).json({ msg: "Eliminar entrenamiento (pendiente)" });
};

module.exports = {
  getEntrenamientos,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  deleteEntrenamiento,
};
