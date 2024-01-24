import e from "express";
import { prisma } from "./prisma_client";


export const reservation_create = async (stationId: number, vehicleId: number, date: Date) => {
    try {
        const reservation = await prisma.reservation.create({
            data: {
                stationId: stationId,
                carId: vehicleId,
                reservationDateTime: date,   
            }
        })
        return reservation;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create reservation");
    }
}
