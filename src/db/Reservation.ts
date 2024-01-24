import e from "express";
import { prisma } from "./prisma_client";
import { vehicle_getByAutoIncrementId } from "./cars";


export const reservation_create = async (stationId: number, vehicleId: number, date: Date) => {
    try {
        const car:any=vehicle_getByAutoIncrementId(vehicleId);
        if(car==null){
            throw new Error("Failed to create reservation");
        }
        const station:any = await prisma.station.findFirst({
            where: {
                id: stationId
            }
        })
        if(station==null){
            throw new Error("Failed to create reservation");
        }

        const reservation = await prisma.reservation.create({
            data: {
               car:car,
               station:station,
                reservationDateTime: date,   
            }
        })
        return reservation;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create reservation");
    }
}
