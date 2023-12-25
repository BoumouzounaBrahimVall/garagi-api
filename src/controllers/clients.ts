import { client_create, client_delete, client_get, client_update } from "../db/clients";
import { compte_create, compte_get } from "../db/comptes";
import { prisma } from "../db/prisma_client";

import express from "express";

export const createClient = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password, role, fullname } = req.body;
    const compte = await compte_create(email, password, role);
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
    const { email } = req.body;
    const compte = await compte_get(email);
    const client = await client_delete(compte);

    res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const changeStateClient = async (
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
