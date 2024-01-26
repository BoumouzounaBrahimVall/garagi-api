import express from 'express';
import { getStatistics } from '../controllers/statistics';


export default (router: express.Router) => {
	router.get('/statistics',getStatistics);
};