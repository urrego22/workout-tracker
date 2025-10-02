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
const createProgramacion = (req, res) => {};
const updateProgramacion = (req, res) => {};
const patchProgramacion = (req, res) => {};
const deleteProgramacion = (req, res) => {};



module.exports = {
  getProgramaciones,
  getProgramacionById,
  createProgramacion,
  updateProgramacion,
  patchProgramacion,
  deleteProgramacion,
};
