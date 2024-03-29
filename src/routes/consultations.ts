import express from 'express';

//import { getAllUsers, deleteUser } from '../controllers/clients';
import { isAuthenticated } from '../middlewares';
import { createConsultation, getAllConsultation } from '../controllers/consultations';


export default (router: express.Router) => {
	/*
	*/
	router.post('/consultations/create',createConsultation );
	router.get('/consultations/get-all',getAllConsultation );

	//router.put('/cars/update',updateVehicle );
	//router.delete('/cars/delete/:matricule/:client_id',deleteVehicle );
	//router.get('/consultation/:consId',getVehicleById );
};