const express = require('express');
const app = express();
const path = require('path');

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API dummy para devolver la disponibilidad
app.get('/api/disponibilidad', (req, res) => {
  const availability = {
    fecha: "2023-05-20",
    personal_disponible: [
      {
        nombre: "Silvia Biana",
        horario: ["8:00-12:00", "14:00-18:00"],
        id: "123456"
      },
      {
        nombre: "Emma Matute",
        horarios: ["8:00-12:00"],
        id: "789012"
      },
      {
        nombre: "Katty Panchi",
        horarios: ["14:00-18:00"],
        id: "345678"
      }
    ]
  };
  res.json(availability);
});

// Middleware para servir archivos estáticos (si tienes otros archivos estáticos)
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
