/**
 matricule,
    killometrageConsulte,
    repairerFullName,
    stationId,
    category,
    price,
    services,
    problems
 */

    import { prisma } from "./prisma_client";


export const consultation_create = async ( 
    carId:any,
    killometrageConsulte:number,
    repairerFullName:string,
    stationId:any,
    category:any,
    price: number,
    services: any,
    problems: any) => {
  try {
    const result = await prisma.consultation.create({
      data: {
        carId: carId,
        stationId: stationId,
        killometrageConsulte: killometrageConsulte,
        price:price,
        repairerFullName: repairerFullName,
        category: category
      },
    });
    
    const servicesData = services.map((service: { description: any; title?: any; }) => ({ consultationId: result.id, description: service.description, title: service.title??"" }));
    console.log(servicesData)
    const problemsData = problems.map((problems: { description: any; title?: any; }) => ({ consultationId: result.id, description: problems.description, title: problems.title??"" }));
    console.log(problemsData)
   await  prisma.service.createMany({
        data:servicesData,
    })
    await  prisma.problemDiscovered.createMany({
        data:problemsData,
    })
   // let myServices:any;
   /* for(let service of services) {
       
        await prisma.service.create({
            data:{
                consultationId: result.id,
                description:service.description,
                title: service.title
            }
        });
    }
    for(let problem of problems) {
        await prisma.problemDiscovered.create({
            data:{
                consultationId: result.id,
                description:problem.description,
                title: problem.title
            }
        });
    }*/
   // return result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create consultation");
  }
};