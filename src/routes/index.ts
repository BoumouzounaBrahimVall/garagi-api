import express from 'express';

import cars from './cars';
import clients from './clients';
import comptes from './comptes';

const router = express.Router();

export default (): express.Router => {
  cars(router);
  clients(router);
 console.log("here")
  comptes(router);
  return router;
};