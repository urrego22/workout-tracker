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

##commit 7
## 📌 Endpoints de la API

- **GET** `/api/v1/users`  
  Lista todos los usuarios.  
  Permite filtros opcionales usando query params:  
  - `?role=user` → filtra por rol.  
  - `?search=nombre` → busca por nombre.  

- **GET** `/api/v1/users/:id`  
  Obtiene un usuario por su **ID**.  

- **POST** `/api/v1/users`  
  Crea un nuevo usuario.  

- **PUT** `/api/v1/users/:id`  
  Actualiza un usuario existente por su **ID**.  

- **DELETE** `/api/v1/users/:id`  
  Elimina un usuario por su **ID**.  

  -Ejercicios

 GET '/api/v1/ejercicios'
Lista todos los ejercicios registrados.

GET '/api/v1/ejercicios/:id'
Obtiene un ejercicio específico por su ID.

POST '/api/v1/ejercicios'
Crea un nuevo ejercicio.

Entrenamientos

GET '/api/v1/entrenamientos'  Lista todos los entrenamientos.

GET '/api/v1/entrenamientos/:id'  Obtiene un entrenamiento por ID.

POST '/api/v1/entrenamientos'  Crea un entrenamiento.

PUT '/api/v1/entrenamientos/:id' Actualiza un entrenamiento completo.

PATCH '/api/v1/entrenamientos/:id' Actualiza parcialmente un entrenamiento.

DELETE '/api/v1/entrenamientos/:id'  Elimina un entrenamiento.


programacion
GET '/api/v1/programacion'
Lista todas las programaciones.

GET '/api/v1/programacion/:id'
Obtiene una programación por ID.

POST '/api/v1/programacion'
Crea una nueva programación.

PUT '/api/v1/programacion/:id'
Actualiza una programación completa.

PATCH '/api/v1/programacion/:id'
Actualiza parcialmente una programación.

DELETE '/api/v1/programacion/:id'
Elimina una programación.

ListaEntrenamiento

GET `/api/v1/listaentrenamiento`  
Lista todas las listas de entrenamientos.

GET `/api/v1/listaentrenamiento/:id`  
Obtiene una lista de entrenamientos por ID.

POST `/api/v1/listaentrenamiento`  
Crea una nueva lista de entrenamientos.

PUT `/api/v1/listaentrenamiento/:id`  
Actualiza una lista de entrenamientos completa.

PATCH `/api/v1/listaentrenamiento/:id`  
Actualiza parcialmente una lista de entrenamientos.

DELETE `/api/v1/listaentrenamiento/:id`  
Elimina una lista de entrenamientos.
