
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
 
};


const updateReporte = (req, res) => {
 
};


const patchReporte = (req, res) => {
  
};


const deleteReporte = (req, res) => {
  
};

module.exports = {
  getReportes,
  getReporteByUsuario,
  createReporte,
  updateReporte,
  patchReporte,
  deleteReporte,
};

