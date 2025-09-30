# Problema y Solución - API de Usuarios

## 🔎 Problema

En la implementación inicial de la API se definieron **dos rutas iguales** con `router.get('/')`.  
Esto generaba un **conflicto en Express**, ya que el framework siempre ejecuta la primera coincidencia.  
Como consecuencia, la lógica de **filtros y búsqueda nunca se ejecutaba** y las peticiones devolvían siempre el listado completo o vacío.

La solcuion fue eliminar la primer ruta duplicada y mantener solo una unica definicion de GET/ que cumpla ambas funciones.

Ejemplo del error:

```js
// GET /api/v1/users (simple)
router.get('/', (req, res) => {
   res.status(200).json(users);
});

// GET /users?role=user&search=Carlos (con filtros)
router.get('/', (req, res) => {
  const { role, search } = req.query;
  ...
});

