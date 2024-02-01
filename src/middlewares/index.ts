import express from 'express';
import jwt from "jsonwebtoken";
import { SECRET_ACCESS_TOKEN } from '../utils/constants';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction)=> {
  const authHeader = req.headers['authorization']
  console.log("authorisation: "+authHeader)
  const token = authHeader && authHeader.split(' ')[1]
  console.log("token: "+token)

  if (token==null) return res.sendStatus(401)

  jwt.verify(token, SECRET_ACCESS_TOKEN as string, (err: any, user: any) => {
    console.log(err)
    
    if (err) return res.sendStatus(403)
    next()
  })
}
