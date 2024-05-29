const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/disponibilidad', (req, res) => {
  const response = {
    "fecha": "2023-05-20",
    "personal_disponible": [
      {
        "nombre": "Silvia Biana",
        "horarios": ["8:00 - 12:00", "14:00 - 18:00"],
        "id": "123456"
      },
      {
        "nombre": "Emma Matute",
        "horarios": ["8:00 - 12:00"],
        "id": "789012"
      },
      {
        "nombre": "Katty Panchi",
        "horarios": ["14:00 - 18:00"],
        "id": "345678"
      }
    ]
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
