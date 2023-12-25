import { compte_changeState, compte_create, compte_delete, compte_get } from "../db/comptes";

import express from "express";

export const createCompte = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password, role } = req.body;
    const result = await compte_create(email, password, role);
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
    const { email } = req.body;
    const compte = await compte_delete(email)
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
    const compte = await compte_changeState(email, isActive)

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

    const compte = await compte_get(email)

    res.status(200).json(compte);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
