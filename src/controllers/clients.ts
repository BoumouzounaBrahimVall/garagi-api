import { client_create, client_delete, client_get, client_get_all, client_get_subs, client_update } from "../db/clients";
import { compte_create, compte_get } from "../db/comptes";

import express from "express";

export const createClient = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password, role, fullname,phoneNumber } = req.body;
    let compte = await compte_get(email);
    if(compte===null){
    compte= await compte_create(email, password, role,phoneNumber);
    }
    const client = await client_create(fullname,compte.id)

    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteClient = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.params;
    const compte = await compte_get(email);
    const client = await client_delete(compte);

    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateClient = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, fullname } = req.body;
    const compte = await compte_get(email);
    const client = await client_update(fullname,compte);

    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getClient = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.params;
    const compte = await compte_get(email);
    const client = await client_get(compte);
    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getAllClient = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const client = await client_get_all();
    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
//getClientsBySubString

export const getClientsBySubString = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { subs } = req.params;
    const client = await client_get_subs(subs);
    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};