// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

// mock data to send to our frontend
let films = [
    {
      id: 1,
      name: 'Quem Quer Ser um Milionário?',
      origin: 'UK | USA',
      year: '2008',
      director: 'Danny Boyle',
      images: [
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/500',
      ],
      genre: 'drama',
      language: 'inglês',
      status: 'assistido'
    },
    {
      id: 2,
      name: 'Quem Quer Ser um Milionário?',
      origin: 'UK | USA',
      year: '2008',
      director: 'Danny Boyle',
      images: [
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/500',
      ],
      genre: 'drama',
      language: 'inglês',
      status: 'assistido'
    }
];

app.get('/films', (req, res) => {
  res.send(films);
});

app.get('/films/:id', (req, res) => {
  const id = Number(req.params.id);
  const film = films.find(film => film.id === id);
  res.send(film);
});

// listen on the port
app.listen(port);