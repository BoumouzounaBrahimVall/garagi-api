import { prisma } from "./prisma_client";


export const vehicle_create = async (matricule:string,model:string,client_id:any, km?: number ) => {
  try {
    const result = await prisma.vehicle.create({
      data: {
        matricule: matricule,
        model: model,
        ownerId: client_id,
        KilometrageActuel:km
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete vehicle");
  }
};

export const vehicle_delete = async (matricule: string,client_id: any ) => {
  try {
    const vehicle = await prisma.vehicle.deleteMany({
      where: {
        matricule: matricule,
        ownerId: Number(client_id)
      },
    });
    return vehicle;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete vehicle");
  }
};

export const vehicle_update = async ( KilometrageActuel: number, matricule: string, client_id:any,model?: string) => {
  try {
    const vehicle = await prisma.vehicle.updateMany({
      data: {
        model: model,
        KilometrageActuel: KilometrageActuel
      },
      where:{
        ownerId:Number(client_id),
        AND:{
            matricule: matricule,
        }
      }
    });
    return vehicle;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to change vehicle state");
  }
};

export const vehicle_get = async (matricule: string, ownerId:any) => {
  try {
    const vehicle = await prisma.vehicle.findFirst({
      include:{
        consultations: true,
        reservations: true,
      },
      where: {
        matricule:matricule ,
        ownerId:Number(ownerId)
      },
    });
    return vehicle;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get vehicle");
  }
};

export const vehicle_getById = async ( matricule: string) => {
    try {
      const vehicle = await prisma.vehicle.findFirst({
        include:{
          consultations: true,
          reservations: true,
        },
        where: {
          matricule:matricule
        },
      });
      return vehicle;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get vehicle");
    }
  };

  export const vehicles_getByOwerId = async ( ownerId:any) => {
    try {
      const vehicle = await prisma.vehicle.findMany({
        include:{
          consultations: true,
          reservations: true,
        },
        where: {
          ownerId:Number(ownerId)
        },
      });
      return vehicle;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get vehicle");
    }
  };
  