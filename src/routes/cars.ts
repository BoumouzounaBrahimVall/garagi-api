import express from 'express';

//import { getAllUsers, deleteUser } from '../controllers/clients';
import { isAuthenticated } from '../middlewares';


export default (router: express.Router) => {
 // router.get('/cars', isAuthenticated, getAllUsers);
 // router.delete('/cars/:id', isAuthenticated, deleteUser);
};

/**
 GET "/cars/:id-client"
	POST "cars/add-car"
	GET "/cars/:id-car/consultations"
	GET "/cars/:id/consultations/:id"
 */