
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

const createEntrenamiento = (req, res) => {
    const { usuarioId, titulo, fechaHora, estado } = req.body;

  if (!usuarioId || !titulo || !fechaHora) {
    return res.status(400).json({ error: "usuarioId, titulo y fechaHora son requeridos" });
  }

  const usuario = listaentrenamiento.find(u => u.usuarioId === usuarioId);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const newEntrenamiento = {
    id: Date.now(),
    titulo,
    fechaHora,
    estado: estado || "pendiente"
  };

  usuario.entrenamientos.push(newEntrenamiento);
  res.status(201).json(newEntrenamiento);
};

const updateEntrenamiento = (req, res) => {
    const { id } = req.params;
  const { titulo, fechaHora, estado } = req.body;

  let updated = null;
  listaentrenamiento.forEach(usuario => {
    const index = usuario.entrenamientos.findIndex(ent => ent.id === parseInt(id));
    if (index !== -1) {
      usuario.entrenamientos[index] = { id: parseInt(id), titulo, fechaHora, estado };
      updated = usuario.entrenamientos[index];
    }
  });

  if (!updated) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  res.status(200).json(updated);
};

const patchEntrenamiento = (req, res) => {
    const { id } = req.params;
  const { titulo, fechaHora, estado } = req.body;

  let updated = null;
  listaentrenamiento.forEach(usuario => {
    const entrenamiento = usuario.entrenamientos.find(ent => ent.id === parseInt(id));
    if (entrenamiento) {
      if (titulo) entrenamiento.titulo = titulo;
      if (fechaHora) entrenamiento.fechaHora = fechaHora;
      if (estado) entrenamiento.estado = estado;
      updated = entrenamiento;
    }
  });

  if (!updated) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }

  res.status(200).json(updated);
};

const deleteEntrenamiento = (req, res) => {};

module.exports = {
  getListaEntrenamiento,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  patchEntrenamiento,
  deleteEntrenamiento
};
