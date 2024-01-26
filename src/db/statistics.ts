import { prisma } from "./prisma_client";

export const statistics_get= async ()=>{
    try {
      const consultationsCount = await prisma.consultation.count();
      const clientsCount = await prisma.client.count();
      const carsCount = await prisma.vehicle.count();
      const reservationsCount = await prisma.reservation.count();
      const stats={
            consultationsCount,
            clientsCount,
            carsCount,
            reservationsCount
        }
    return stats;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get consultations");
    }
    
  
  
  }