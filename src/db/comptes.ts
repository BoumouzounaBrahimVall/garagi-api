import { prisma } from "./prisma_client";


export const compte_create = async (email:string, password:string, role:any,phoneNumber?:string) => {
  try {
    //const { email, password, role } = body;

    const result = await prisma.compte.create({
      data: {
        email: email,
        password: password,
        role: role == 0 ? "USER" : "MANAGER",
        isActive: true,
        phoneNumber: phoneNumber
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete compte");
  }
};

export const compte_delete = async (email: string) => {
  try {
    const compte = await prisma.compte.deleteMany({
      where: {
        email: email,
      },
    });
    return compte;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete compte");
  }
};

export const compte_changeState = async (email: string, isActive: boolean) => {
  try {
    const compte = await prisma.compte.updateMany({
      data: {
        isActive: isActive,
      },
      where: {
        email: email,
      },
    });
    return compte;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to change compte state");
  }
};

export const compte_get = async (email: string) => {
  try {
    const compte = await prisma.compte.findFirst({
      where: {
        email: email,
      },
    });
    return compte;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get compte");
  }
};
