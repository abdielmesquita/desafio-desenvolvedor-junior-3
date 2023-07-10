const express = require('express');
require('dotenv').config();
require('express-async-errors');

const errorHandler = require('./app/middleware/errorHandler');
const cors = require('./app/middleware/cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.get(errorHandler);

const port = 3001;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`💻🚀 Servidor iniciado em http://localhost:${port}`));
