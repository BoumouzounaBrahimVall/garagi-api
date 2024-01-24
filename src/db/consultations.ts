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
  
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create consultation");
  }
};
export const consultation_get_all= async ()=>{
  try {
    const consultations = await prisma.consultation.findMany(
    {
      include: {
        _count:{
          select:{
            problems: true,
            services: true
          }
        },
        car: {
          select:{
            owner: {
              select:{
                fullName:true
              }
            },
            matricule:true
          }
        }
      }
    }
  );
  const transformedConsultations = consultations.map(obj => ({
    id: obj.id,
    date: obj.date,
    carId: obj.carId,
    killometrageConsulte: obj.killometrageConsulte,
    repairerFullName: obj.repairerFullName,
    stationId: obj.stationId,
    category: obj.category,
    price: obj.price,
    fullName: obj.car.owner.fullName,
    matricule: obj.car.matricule,
    problems: obj._count.problems,
    services: obj._count.services
  }));
  return transformedConsultations;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get consultations");
  }
  


}