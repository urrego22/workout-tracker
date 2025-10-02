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
   const { entrenamientoId, ejercicioId, series, repeticiones, peso } = req.body;
  if (!entrenamientoId || !ejercicioId) {
    return res.status(400).json({ error: "entrenamientoId y ejercicioId son requeridos" });
  }
  const newEntrenamiento = {
    id: `${Date.now()}`,
    entrenamientoId,
    ejercicioId,
    series,
    repeticiones,
    peso
  };
  entrenamientos.push(newEntrenamiento);
  res.status(201).json({ msg: "Crear entrenamiento (pendiente)" });
};

const updateEntrenamiento = (req, res) => {
  const { id } = req.params;
  const { entrenamientoId, ejercicioId, series, repeticiones, peso } = req.body;
  const index = entrenamientos.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ error: "Entrenamiento no encontrado" });
  entrenamientos[index] = { id, entrenamientoId, ejercicioId, series, repeticiones, peso };
  res.status(200).json({ msg: "Actualizar entrenamiento (pendiente)" });
};

const patchEntrenamiento = (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const index = entrenamientos.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ error: "Entrenamiento no encontrado" });
  entrenamientos[index] = { ...entrenamientos[index], ...updates };
  res.status(200).json(entrenamientos[index]);
};

const deleteEntrenamiento = (req, res) => {
  res.status(200).json({ msg: "Eliminar entrenamiento (pendiente)" });
};

module.exports = {
  getEntrenamientos,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  patchEntrenamiento,
  deleteEntrenamiento,
};
