import e from "express";
import { prisma } from "./prisma_client";


export const reservation_create = async (stationId: number, vehicleId: number, date: Date) => {
    try {
        

        const reservation = await prisma.reservation.create({
            data: {
               carId:vehicleId,
               stationId:stationId,
                reservationDateTime: date,   
            }
        })
        return reservation;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create reservation");
    }
}

export const reservation_update = async (reservationId: number, status: any) => {
    try {
        const reservation = await prisma.reservation.update({
            where: {
                id: reservationId
            },
            data: {
                status: status
            }
        })
        return reservation;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update reservation");
    }
}

export const Reservation_get_all = async () => {
    try {
        const reservations = await prisma.reservation.findMany({
            include:{
                car:true,
                station:true
            }
        })
        const transformedReservations = reservations.map(obj => ({  
            carId: obj.carId,
            stationId: obj.stationId,
            id: obj.id,
            reservationDateTime: obj.reservationDateTime,
            status: obj.status,
            carModel: obj.car.model,
            stationName: obj.station.name,
            
          }));
        return transformedReservations;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get all reservations");
    }
}

export const reservations_getByClientId = async (clientId: any) => {
    try {
        const reservations = await prisma.reservation.findMany({
            where: {
                car: {
                    ownerId: Number(clientId)
                }
            },
            include:{
                car:true,
                station:true
            }
        })
        const transformedReservations = reservations.map(obj => ({  
            carId: obj.carId,
            stationId: obj.stationId,
            id: obj.id,
            reservationDateTime: obj.reservationDateTime,
            status: obj.status,
            carModel: obj.car.model,
            stationName: obj.station.name,
            
          }));

        return transformedReservations;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get all reservations by Client Id");
    }
}

export const reservations_updateToExpired = async () => {
    try {
        const reservations = await prisma.reservation.updateMany({
            where: {
                reservationDateTime: {
                   gte: new Date()
                }
            },
            data: {
                status: "ENDED"
            }
        })
        return reservations;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update reservations to expired");
    }
}
/**
 * 
 * # ┌────────────── second (optional)
# │ ┌──────────── minute
# │ │ ┌────────── hour
# │ │ │ ┌──────── day of month
# │ │ │ │ ┌────── month
# │ │ │ │ │ ┌──── day of week
# │ │ │ │ │ │
# │ │ │ │ │ │
# * * * * * *
 * 
 * **/