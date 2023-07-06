const express = require('express');

const app = express();

const port = 3001;

app.get('/', (request, response) => {
  response.send('Hello world!');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`🚀 Servidor iniciado em http://localhost:${port}`));
