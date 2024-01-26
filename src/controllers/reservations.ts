import e from "express";
import { Reservation_get_all, reservation_create, reservation_update, reservations_getByClientId } from "../db/reservations";
import express from "express";
import exp from "constants";

export const createReservation = async (
    req: express.Request,
    res: express.Response
    ) => {
    try {
        const {carId,stationId, reservationDateTime} = req.body;
        const reservation = await reservation_create(stationId,carId,reservationDateTime);
        res.status(200).json(reservation);
   
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
    }

export const updateReservation = async (
    req: express.Request,
    res: express.Response
    ) => {
    try {
        const {reservationId,status} = req.body;
        const reservation = await reservation_update(reservationId,status);
       
        res.status(200).json(reservation);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
    }

    export const getReservations = async (
        req: express.Request,
        res: express.Response
        ) => {
        try {
          const reservations = await Reservation_get_all(); 
            res.status(200).json(reservations);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
        }

        export const getReservationByClientId = async (
            req: express.Request,
            res: express.Response
          ) => {
            try {
              const { clientId } = req.params;
              const reservations = await reservations_getByClientId(clientId);
              res.status(200).json(reservations);
            } catch (error) {
              console.log(error);
              return res.sendStatus(400);
            }
          };
        