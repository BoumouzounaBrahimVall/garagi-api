import express from 'express';

import {createClient,deleteClient,getClient, updateClient} from '../controllers/clients';
import { isAuthenticated } from '../middlewares';


export default (router: express.Router) => {
  router.post('/clients/create',createClient);
  router.put('/clients/update',updateClient);
  router.delete('/clients/delete/:email',deleteClient);
  router.get('/clients/get/:email',getClient);

};
/**
 GET "/client/get/:id"
	POST "/client/add"
	POST "/client/change-compte-state"
	PUT "/client/update"
 */