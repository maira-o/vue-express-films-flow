/**
 * 
 * File: app.js
 * Description: App Starter
 * Author: Maíra Oliveira
 * 
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const port = 8000;

// Import routes
const filmRoute = require('./app/routes/film_route');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/films-flow', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(()=> {
    console.log('BD conectado');
  })
  .catch((error)=> {
    console.log('Error ao conectar ao BD');
  });
mongoose.Promise = global.Promise;

var router = express.Router();

// middleware
router.use(function(req, res, next) {
    console.log('algo está acontecendo aqui...');
    console.log("hora do request: " + Date.now());
    console.log("método: " + req.method)
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Olá, vc está em Film & Flow!' })   
});

app.use('/api/films', filmRoute);

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

// Set up Auth0 configuration 
/**const authConfig = {
  domain: "dev-59b-nrrc.us.auth0.com",
  audience: "https://films-flow-api.com"
}; **/

// Create middleware to validate the JWT using express-jwt
/**const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"]
}); **/

// mock data to send to our frontend
/**let films = [
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
    name: 'Quem Quer Ser um?',
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

app.get('/films/:id', checkJwt, (req, res) => {
  const id = Number(req.params.id);
  const film = films.find(film => film.id === id);
  res.send(film);
});**/

// listen on the port
app.listen(port);