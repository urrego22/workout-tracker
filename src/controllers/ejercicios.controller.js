// Estado en memoria (simulación)
let ejercicios = [
  {
    id: "1",
    usuarioID: "1",
    titulo: "Rutina de fuerza",
    fechaHora: "2025-09-25T18:00:00Z",
    estado: "pendiente",
    notas: "Aumentar peso en sentadillas",
    ejercicios: [
      {
        id: 101,
        nombreEjercicio: "Sentadillas",
        series: 4,
        repeticiones: 10,
        peso: 80
      }
    ]
  }
];

// Obtener todos los ejercicios con filtros
const getEjercicios = (req, res) => {
  const { estado, search } = req.query;
  let result = ejercicios;

  if (estado) {
    result = result.filter(e => e.estado === estado);
  }

  if (search) {
    result = result.filter(e =>
      e.titulo.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// Obtener un ejercicio por ID
const getEjercicioById = (req, res) => {
  const { id } = req.params;
  const ejercicio = ejercicios.find(e => e.id === id);

  if (!ejercicio) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  res.status(200).json(ejercicio);
};

// Crear un nuevo ejercicio
const createEjercicio = (req, res) => {
  const { usuarioID, titulo, fechaHora, estado, notas, ejercicios: lista } = req.body;

  if (!usuarioID || !titulo) {
    return res.status(400).json({ error: "usuarioID y titulo son requeridos" });
  }

  const newEjercicio = {
    id: `${Date.now()}`,
    usuarioID,
    titulo,
    fechaHora: fechaHora || new Date().toISOString(),
    estado: estado || "pendiente",
    notas: notas || "",
    ejercicios: lista || []
  };

  ejercicios.push(newEjercicio);
  res.status(201).json(newEjercicio);
};

// Actualizar un ejercicio (PUT completo)
const updateEjercicio = (req, res) => {
  const { id } = req.params;
  const { usuarioID, titulo, fechaHora, estado, notas, ejercicios: lista } = req.body;

  const index = ejercicios.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  if (!usuarioID || !titulo) {
    return res.status(400).json({ error: "usuarioID y titulo son requeridos" });
  }

  ejercicios[index] = {
    ...ejercicios[index],
    usuarioID,
    titulo,
    fechaHora,
    estado,
    notas,
    ejercicios: lista
  };

  res.status(200).json(ejercicios[index]);
};

// Actualización parcial (PATCH)
const patchEjercicio = (req, res) => {
  const { id } = req.params;
  const cambios = req.body;

  const index = ejercicios.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  ejercicios[index] = {
    ...ejercicios[index],
    ...cambios
  };

  res.status(200).json(ejercicios[index]);
};

// Eliminar un ejercicio
const deleteEjercicio = (req, res) => {
  const { id } = req.params;
  const index = ejercicios.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  const deletedEjercicio = ejercicios.splice(index, 1);
  res.status(200).json({ deleted: deletedEjercicio[0].id });
};

module.exports = {
  getEjercicios,
  getEjercicioById,
  createEjercicio,
  updateEjercicio,
  patchEjercicio,
  deleteEjercicio
};
