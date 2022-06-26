require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const { validTheFields, validUsername, error, validPassword, adminUser} = require('./middlewares');
const jwtAuth = require('./middlewares/jwtAuth');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/login', validTheFields, validUsername, validPassword, controllers.login);
app.get('/users/me', jwtAuth, controllers.user);
app.get('/top-secret', jwtAuth, adminUser, controllers.adminUser);

app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
