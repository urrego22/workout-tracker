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
200 
  Lista todos los usuarios.  
  Permite filtros opcionales usando query params:  
  - `?role=user` → filtra por rol.  
  - `?search=nombre` → busca por nombre.  

- **GET** `/api/v1/users/:id`
200/404 si no existe  
  Obtiene un usuario por su **ID**.  

- **POST** `/api/v1/users`
201/400 si faltan campos por llenar  
  Crea un nuevo usuario.  

- **PUT** `/api/v1/users/:id` 
200/400/404 actualiza si un usuario completo. 400 si faltan campos 
  Actualiza un usuario existente por su **ID**.  

- **DELETE** `/api/v1/users/:id`
200/404 si no existe  
  Elimina un usuario por su **ID**.  

  -Ejercicios

 GET '/api/v1/ejercicios'
 200
Lista todos los ejercicios registrados.

GET '/api/v1/ejercicios/:id'
200/404
Obtiene un ejercicio específico por su ID.

POST '/api/v1/ejercicios'
201/400 si falta usuarioID o titulo
Crea un nuevo ejercicio.

Entrenamientos

GET '/api/v1/entrenamientos'
200 
 Lista todos los entrenamientos.

GET '/api/v1/entrenamientos/:id' 
200/404
 Obtiene un entrenamiento por ID.

POST '/api/v1/entrenamientos'
201/400 si faltan campos requeridos  
Crea un entrenamiento.

PUT '/api/v1/entrenamientos/:id' 
200/400/404
Actualiza un entrenamiento completo.

PATCH '/api/v1/entrenamientos/:id'
200/400/404
 Actualiza parcialmente un entrenamiento.

DELETE '/api/v1/entrenamientos/:id' 
200/404 
Elimina un entrenamiento.


programacion
GET '/api/v1/programacion'
200
Lista todas las programaciones.

GET '/api/v1/programacion/:id'
200/404
Obtiene una programación por ID.

POST '/api/v1/programacion'
201/400
Crea una nueva programación.

PUT '/api/v1/programacion/:id'
200/400/404
Actualiza una programación completa.

PATCH '/api/v1/programacion/:id'
200/400/404
Actualiza parcialmente una programación.

DELETE '/api/v1/programacion/:id'
200/404
Elimina una programación.

ListaEntrenamiento

GET `/api/v1/listaentrenamiento`
200  
Lista todas las listas de entrenamientos.

GET `/api/v1/listaentrenamiento/:id`  
200/404
Obtiene una lista de entrenamientos por ID.

POST `/api/v1/listaentrenamiento`
201/400  
Crea una nueva lista de entrenamientos.

PUT `/api/v1/listaentrenamiento/:id` 
200/400/404 
Actualiza una lista de entrenamientos completa.

PATCH `/api/v1/listaentrenamiento/:id`
200/400/404  
Actualiza parcialmente una lista de entrenamientos.

DELETE `/api/v1/listaentrenamiento/:id` 
200/404 
Elimina una lista de entrenamientos.

comentarios
GET    '/api/v1/comentarios'
200        
Lista todos los comentarios

GET    '/api/v1/comentarios/:id'
200/404    
 Obtiene un comentario por ID

POST   '/api/v1/comentarios'
201/400        
Crea un comentario

PUT    '/api/v1/comentarios/:id' 
200/400/404   
Actualiza un comentario completo

PATCH  '/api/v1/comentarios/:id' 
200/400/404   
Actualiza parcialmente un comentario

DELETE '/api/v1/comentarios/:id' 
200/404  
Elimina un comentario


reportes

GET    '/api/v1/reportes' 
200       
 Lista todos los reportes

GET    '/api/v1/reportes/:usuarioId'
200/404  
 Obtiene un reporte por usuario

POST   '/api/v1/reportes'   
201/400     
 Crea un reporte

PUT    '/api/v1/reportes/:usuarioId' 
200/400/404
 Actualiza un reporte completo

PATCH  '/api/v1/reportes/:usuarioId'
200/400/404
Actualiza parcialmente un reporte

DELETE '/api/v1/reportes/:usuarioId' 
200/404
 Elimina un reporte

