import express from 'express';

import cars from './cars';
import clients from './clients';

const router = express.Router();

export default (): express.Router => {
  cars(router);
  clients(router);

  return router;
};