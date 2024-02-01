import {
  compte_changeState,
  compte_create,
  compte_delete,
  compte_get,
  compte_get_with_infos,
} from "../db/comptes";
import {generateAccessToken} from  '../utils/jwt_token_generator';
import express from "express";
import bcrypt from "bcrypt";
export const createCompte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let { email, password, role, phoneNumber } = req.body;
    // hash the password
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await compte_create(email, hashedPassword, role, phoneNumber);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteCompte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.params;
    const compte = await compte_delete(email);
    res.status(200).json(compte);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const changeStateCompte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, isActive } = req.body;
    const compte = await compte_changeState(email, isActive);

    res.status(200).json(compte);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getCompte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.params;

    const compte = await compte_get(email);

    res.status(200).json(compte);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const SignInCompte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body;

    const compte = await compte_get_with_infos(email);
    if (!compte) return res.status(400).json({ message: "Invalid email or password. Please try again with the correct credentials." });
    // if user exists
    // validate password
    const isPasswordValid = await bcrypt.compare(
      `${password}`,
      compte.password,
    );
    // if not valid, return unathorized response
    if (!isPasswordValid){
      return res.status(401).json({
        status: 'failed',
        data: [],
        message:
          'Invalid email or password. Please try again with the correct credentials.',
      });
    }
    // generate the JWT token 
    const token =generateAccessToken(compte.email); 
    console.log();
    // cleaning data before returning
    const formatedData = {
      id: compte?.id,
      email: compte?.email,
      phoneNumber: compte?.phoneNumber,
      isActive: compte?.isActive,
      role:compte?.role,
      userId: compte?.role==='USER'?compte.client?.id:compte?.manager?.id,
      token:token
      }
    return   res.status(200).json(formatedData);
   
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
