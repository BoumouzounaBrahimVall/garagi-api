import { reservation_create } from "../db/reservations";
import express from "express";

export const createReservation = async (
    req: express.Request,
    res: express.Response
    ) => {
    try {
        const {carId,stationId, reservationDateTime} = req.body;
        const reservation = await reservation_create(stationId,carId,reservationDateTime);
        res.status(200).json(reservation);
       
        res.status(200).json();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
    }
