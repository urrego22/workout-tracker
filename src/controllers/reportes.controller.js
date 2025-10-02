
let reportes = [
  {
    usuarioId: 1,
    totalEntrenamientos: 15,
    completados: 10,
    proceso: 5
  }
];




const getReportes = (req, res) => {
   res.status(200).json(reportes);
};


const getReporteByUsuario = (req, res) => {
const { usuarioId } = req.params;
  const reporte = reportes.find(r => r.usuarioId == usuarioId);

  if (!reporte) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  res.status(200).json(reporte);
};


const createReporte = (req, res) => {
   const { usuarioId, totalEntrenamientos, completados, proceso } = req.body;

  if (!usuarioId || totalEntrenamientos == null || completados == null || proceso == null) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const newReporte = { usuarioId, totalEntrenamientos, completados, proceso };
  reportes.push(newReporte);
  res.status(201).json(newReporte);
};


const updateReporte = (req, res) => {
 const { usuarioId } = req.params;
  const { totalEntrenamientos, completados, proceso } = req.body;

  const index = reportes.findIndex(r => r.usuarioId == usuarioId);
  if (index === -1) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  if (totalEntrenamientos == null || completados == null || proceso == null) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  reportes[index] = { usuarioId: Number(usuarioId), totalEntrenamientos, completados, proceso };
  res.status(200).json(reportes[index])
};


const patchReporte = (req, res) => {
   const { usuarioId } = req.params;
  const { totalEntrenamientos, completados, proceso } = req.body;

  const index = reportes.findIndex(r => r.usuarioId == usuarioId);
  if (index === -1) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  reportes[index] = {
    ...reportes[index],
    totalEntrenamientos: totalEntrenamientos ?? reportes[index].totalEntrenamientos,
    completados: completados ?? reportes[index].completados,
    proceso: proceso ?? reportes[index].proceso
  };

  res.status(200).json(reportes[index]);
};


const deleteReporte = (req, res) => {
    const { usuarioId } = req.params;
  const index = reportes.findIndex(r => r.usuarioId == usuarioId);

  if (index === -1) {
    return res.status(404).json({ error: "Reporte no encontrado" });
  }

  const deleted = reportes.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].usuarioId });
};

module.exports = {
  getReportes,
  getReporteByUsuario,
  createReporte,
  updateReporte,
  patchReporte,
  deleteReporte,
};

