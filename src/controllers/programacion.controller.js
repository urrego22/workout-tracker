// Estado en memoria (simulación)
let programaciones = [
    {
    id: "201",
    entrenamientoId: 101,
    fecha: "2025-09-22",
    hora: "08:30",
    estado: "programado"
    }
];

const getProgramaciones = (req, res) => {
      res.status(200).json(programaciones);
};
const getProgramacionById = (req, res) => {
    const { id } = req.params;
  const programacion = programaciones.find(p => p.id === id);

  if (!programacion) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  res.status(200).json(programacion);
};
const createProgramacion = (req, res) => {
    const { entrenamientoId, fecha, hora, estado } = req.body;

  if (!entrenamientoId || !fecha || !hora) {
    return res.status(400).json({ error: "entrenamientoId, fecha y hora son requeridos" });
  }

  const newProgramacion = {
    id: `${Date.now()}`,
    entrenamientoId,
    fecha,
    hora,
    estado: estado || "programado"
  };

  programaciones.push(newProgramacion);
  res.status(201).json(newProgramacion)
};

const updateProgramacion = (req, res) => {
     const { id } = req.params;
  const { entrenamientoId, fecha, hora, estado } = req.body;

  const index = programaciones.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  if (!entrenamientoId || !fecha || !hora) {
    return res.status(400).json({ error: "entrenamientoId, fecha y hora son requeridos" });
  }

  programaciones[index] = { ...programaciones[index], entrenamientoId, fecha, hora, estado };
  res.status(200).json(programaciones[index]);
};

const patchProgramacion = (req, res) => {
    const { id } = req.params;
  const updates = req.body;

  const index = programaciones.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  programaciones[index] = { ...programaciones[index], ...updates };
  res.status(200).json(programaciones[index]);
};

const deleteProgramacion = (req, res) => {
    const { id } = req.params;
  const index = programaciones.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  const deleted = programaciones.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
};



module.exports = {
  getProgramaciones,
  getProgramacionById,
  createProgramacion,
  updateProgramacion,
  patchProgramacion,
  deleteProgramacion,
};
