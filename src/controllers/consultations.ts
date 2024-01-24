import {  vehicle_getById } from "../db/cars";
import {  consultation_create, consultation_get_all } from "../db/consultations";


import express from "express";

export const createConsultation = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    /**
     * matricule: string, model: string, client_id: number, km?: number
     */
   // const { client_id, matricule, model, km } = req.body;
   // const client = await client_getById(client_id);
   // const vehicle = await vehicle_create(matricule,model,client?.id,km)

   const {
    matricule,
    killometrageConsulte,
    repairerFullName,
    stationId,
    category,
    price,
    services,
    problems
  } = req.body;
  const vehicle = await vehicle_getById(matricule);

  const consultation =await consultation_create(vehicle?.id,
    killometrageConsulte,
    repairerFullName,
    stationId,
    category,
    price,
    services,
    problems);

    res.status(200).json(consultation);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAllConsultation = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const consultations= await consultation_get_all();
    res.status(200).json(consultations);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

/*

export const getConsultationById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { matricule } = req.params;
    const vehicle = await vehicle_getById(matricule);
    res.status(200).json(vehicle);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getConsultationsByCarId = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const { ownerId } = req.params;
      const vehicles = await vehicles_getByOwerId(ownerId);
      res.status(200).json(vehicles);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };*/