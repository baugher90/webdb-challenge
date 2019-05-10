const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./router/projectsRouter');
const actionsRouter = require('./router/actionsRouter');

const server = express();

server.use(express.json(), helmet());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
