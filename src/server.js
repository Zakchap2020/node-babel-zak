import express from 'express';
import { connect } from './database.js';
import exampleRouter from './routers/exampleRouter.js';
import marketplacesRouter from './routers/marketplacesRouter';
// import Marketplaces from './models/marketplaceModel.js';

connect();
const server = express();

server.use(express.json());
server.use('/api', exampleRouter);
server.use('/apimarketplaces', marketplacesRouter);

const PORT = 5000;



server.use('*', (req, res) => {
  return res.status(404).json({ error: 'Route not found' });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


