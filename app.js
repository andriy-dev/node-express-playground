const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ejemplo de otra posicion de ruta que devuelve "Fernando"
app.get("/alumno", (req, res) => {
  res.send("Fernando") // .send solo devuelve contenido estatico, por ej una cadena de texto
})

// === ENVIAR INFO POR PARAMS ===
// :alumno sera la clave, que va a almacenar el valor que pase el cliente 
// ej: en el navegador "localhost:3000/alumno/Fernando/FullStack" 
// req.params = {"alumno": "Fernando", "cursada": "FullStack"}
app.get("/params/:alumno/:cursada", (req, res) => {
  res.json(req.params) // .json se usa para mostrar objetos
})

//(rutas dinamicas siempre al final, para evitar pisar otras rutas)

// === ENVIAR INFO POR QUERY ===
// http://localhost:3000/querys?alumno=Fernando&cursada=FullStack
// req.query = {"alumno":"Fernando","cursada":"FullStack"}
app.get("/querys", (req, res) => {
  res.json(req.query);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})