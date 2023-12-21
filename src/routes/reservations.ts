import express from 'express';

import { getAllUsers, deleteUser } from '../controllers/clients';
import { isAuthenticated } from '../middlewares';


export default (router: express.Router) => {
  router.get('/reservations', isAuthenticated, getAllUsers);
  router.delete('/reservations/:id', isAuthenticated, deleteUser);
};
/**
 GET "/reservations/client/:id-client"
	GET "/reservations/get/:id-reservation"
	GET "/reservations/get/station/:id-station"
	POST "/reservations/reserve/"
	PUT "/reservations/done"
 */