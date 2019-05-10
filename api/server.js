const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./router/projectsRouter');

const server = express();

server.use(express.json(), helmet());
server.use('/api/projects', projectsRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
