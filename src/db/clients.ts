import { Compte } from "@prisma/client";
import { prisma } from "./prisma_client";


export const client_create = async (fullname:string, compt_id:number) => {
  try {
    const result = await prisma.client.create({
      data: {
        fullName: fullname,
        compteId: compt_id
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete client");
  }
};

export const client_delete = async (compte: any) => {
  try {
    const client = await prisma.client.deleteMany({
      where: {
        compte: compte,
      },
    });
    return client;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete client");
  }
};

export const client_update = async (fullname: string, compte: any) => {
  try {
    const client = await prisma.client.updateMany({
      data: {
        fullName: fullname,
      },
      where:{
        compte:compte
      }
    });
    return client;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to change client state");
  }
};

export const client_get = async (compte: any) => {
  try {
    const client = await prisma.client.findFirst({
      include:{
        cars: true,
        compte: true
      },
      where: {
        compte: compte,
      },
    });
    return client;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get client");
  }
};
export const client_getById = async (id: number) => {
  try {
    const client = await prisma.client.findFirst({
      where: {
        id: id,
      },
    });
    return client;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get client");
  }
};
