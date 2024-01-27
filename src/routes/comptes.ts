//createCompte

import express from 'express';
import { SignInCompte, changeStateCompte, createCompte, deleteCompte, getCompte } from '../controllers/comptes';


export default (router: express.Router) => {
  /*
	*/
  router.get('/compte/get/:email', getCompte);
  /*
	*/
  router.post('/compte/create', createCompte);
  /*
	*/
  router.delete('/compte/delete/:email', deleteCompte);
  /*
	*/
  router.put('/compte/change-state', changeStateCompte);
  //sign in
  router.post('/compte/sign-in', SignInCompte);
};