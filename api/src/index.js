const express = require('express');
require('dotenv').config();
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.get((error, request, response, next) => {
  // console.log(error);
  response.sendStatus(500);
});

const port = 3001;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`💻🚀 Servidor iniciado em http://localhost:${port}`));
