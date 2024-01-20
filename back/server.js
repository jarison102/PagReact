const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pagropa',
});

db.connect();

// Ruta para obtener la lista de usuarios
app.get('/registrodeusuarios', (req, res) => {
  db.query('SELECT * FROM registrodeusuarios', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para agregar un nuevo usuario
// Ruta para agregar un nuevo usuario
app.post('/registrodeusuarios', (req, res) => {
  const {
    NamePerson,
    LastNamePerson,
    Country,
    Departament,
    Email,
    Phone,
    DateBirth,
    Cargo,
  } = req.body;

  // Suponiendo que tengas un campo en tu formulario que indique el cargo seleccionado
  const id_cargo = req.body.id_cargo; 

  const sql = 'INSERT INTO registrodeusuarios (NamePerson, LastNamePerson, Country, Departament, Email, Phone, DateBirth, Cargo, id_cargo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)';

  db.query(sql, [NamePerson, LastNamePerson, Country, Departament, Email, Phone, DateBirth, Cargo, id_cargo], (err, result) => {
    if (err) {
      console.error('Error al agregar usuario a MySQL:', err);
      res.status(500).json({ error: 'Error interno del servidor' });  
    } else {
      res.status(201).json({ message: 'Usuario agregado correctamente' });
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
