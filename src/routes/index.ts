import express from 'express';

import cars from './cars';
import clients from './clients';
import comptes from './comptes';
import consultations from './consultations';
import reservations from './reservations';
import statistics from './statistics';

const router = express.Router();

export default (): express.Router => {
  cars(router);
  statistics(router);
  clients(router);
  comptes(router);
  consultations(router);
  reservations(router);
  return router;
};