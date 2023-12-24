import  {prisma}  from '../db/prisma_client';

import express from 'express';

export const createCompte = async (req: express.Request, res: express.Response) => {
           console.log("here3")
  try {

        const { email, password, role } = req.body
    const result = await prisma.compte.create({
        data: {
          email : email,
          password: password,
          role : role==0?'USER':'MANAGER',
          isActive: true
        },
      })
      res.status(200).json(result)
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };


export const deleteCompte = async (req: express.Request, res: express.Response) => {
try {

 const { email, password, role } = req.body
 const compte = await prisma.compte.deleteMany({
    where: {
      email: String(email),
    },
  })

res.status(200).json(compte)
} catch (error) {
console.log(error);
return res.sendStatus(400);
}
};

export const changeStateCompte = async (req: express.Request, res: express.Response) => {
    try {
    
     const {email, isActive } = req.body
     const compte = await prisma.compte.updateMany({
        data:{
            isActive: isActive
        },
        where: {
          email: String(email),
        },
      })
    
    res.status(200).json(compte)
    } catch (error) {
    console.log(error);
    return res.sendStatus(400);
    }
    };

    export const getCompte = async (req: express.Request, res: express.Response) => {
        try {
         const { email } = req.params

         const compte = await prisma.compte.findFirst({
            where:{
                email: email
            },   
          })
        
        res.status(200).json(compte)
        } catch (error) {
        console.log(error);
        return res.sendStatus(400);
        }
        };