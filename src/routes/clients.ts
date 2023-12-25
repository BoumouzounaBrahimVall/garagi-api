import express from 'express';

import {createClient,deleteClient,getClient} from '../controllers/clients';
import { isAuthenticated } from '../middlewares';


export default (router: express.Router) => {
 // router.get('/clients', isAuthenticated, getAllUsers);
  router.post('/clients/create',createClient);
};
/**
 GET "/client/get/:id"
	POST "/client/add"
	POST "/client/change-compte-state"
	PUT "/client/update"
 */