import express from 'express';

//import { getAllUsers, deleteUser } from '../controllers/clients';
import { createReservation, getReservationByClientId, getReservations, updateReservation } from '../controllers/reservations';


export default (router: express.Router) => {
  //router.get('/reservations', isAuthenticated, getAllUsers);
  //router.delete('/reservations/:id', isAuthenticated, deleteUser);
	//POST: "/reservations/reserve/"
	router.post('/reservations/reserve',createReservation);
	router.put('/reservations/update',updateReservation);
	router.get('/reservations/',getReservations);
	router.get('reservations/get/:clientId',getReservationByClientId);

};
/**
 GET "/reservations/client/:id-client"
	GET "/reservations/get/:id-reservation"
	GET "/reservations/get/station/:id-station"
	POST "/reservations/reserve/"
	PUT "/reservations/done"
 */