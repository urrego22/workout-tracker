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