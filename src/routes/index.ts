import express from 'express';

import cars from './cars';
import clients from './clients';
import comptes from './comptes';
import consultations from './consultations';

const router = express.Router();

export default (): express.Router => {
  cars(router);
  clients(router);
  comptes(router);
  consultations(router);
  return router;
};