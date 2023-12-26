import express from 'express';

//import { getAllUsers, deleteUser } from '../controllers/clients';
import { isAuthenticated } from '../middlewares';
import { createVehicle, deleteVehicle, getVehicleById, getVehicleByOwnerId, updateVehicle } from '../controllers/cars';


export default (router: express.Router) => {
	router.post('/cars/create',createVehicle );
	router.put('/cars/update',updateVehicle );
	router.delete('/cars/delete/:matricule/:client_id',deleteVehicle );
	router.get('/cars/:ownerId',getVehicleByOwnerId );
	router.get('/cars/matricule/:matricule',getVehicleById );
};

/**
 GET "/cars/:id-client"
	POST "cars/add-car"
	GET "/cars/:id-car/consultations"
	GET "/cars/:id/consultations/:id"
 */