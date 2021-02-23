import express from 'express';
import { connect } from './database';
import Marketplaces from './models/marketPlaceModel';

connect();
const server = express();

server.use(express.json());

const PORT = 5000;

server.get('/api/marketplaces', async (req, res) => {
  try {
    const marketplaces = await Marketplaces.find({});
    console.log(marketplaces);

    return res.json(marketplaces);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

server.post('/api/marketplaces', async (req, res) => {
  try {
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

server.use('*', (req, res) => {
  return res.status(404).json({ error: 'Route not found' });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
