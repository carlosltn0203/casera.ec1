const express = require('express');
const app = express();

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

app.use(express.static('public'));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
