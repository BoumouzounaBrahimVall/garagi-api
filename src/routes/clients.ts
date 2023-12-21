import express from 'express';

import { getAllUsers, deleteUser } from '../controllers/clients';
import { isAuthenticated } from '../middlewares';


export default (router: express.Router) => {
  router.get('/clients', isAuthenticated, getAllUsers);
  router.delete('/clients/:id', isAuthenticated, deleteUser);
};
/**
 GET "/client/get/:id"
	POST "/client/add"
	POST "/client/change-compte-state"
	PUT "/client/update"
 */