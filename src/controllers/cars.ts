import { vehicle_create, vehicle_delete, vehicle_get, vehicle_getById, vehicle_getBySubString, vehicle_get_all, vehicle_update, vehicles_getByOwerId } from "../db/cars";
import {  client_getById } from "../db/clients";


import express from "express";

export const createVehicle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    /**
     * matricule: string, model: string, client_id: number, km?: number
     */
    const { client_id, matricule, model, km } = req.body;
    const client = await client_getById(client_id);
    const vehicle = await vehicle_create(matricule,model,client?.id,km)

    res.status(200).json(vehicle);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteVehicle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { matricule,client_id  } = req.params;
   
    const vehicle = await vehicle_delete(matricule,client_id);

    res.status(200).json(vehicle);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateVehicle = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { km, matricule, client_id,model} = req.body;
    const vehicle = await vehicle_update(km, matricule, client_id,model);

    res.status(200).json(vehicle);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getVehicleById = async (
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
export const getVehicles = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vehicles = await vehicle_get_all();
    res.status(200).json(vehicles);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getVehicleBySubString = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { subs } = req.params;
    let vehicles:any;
    if(subs==null || subs.length===0){
      vehicles= await vehicle_get_all();
    }
    else vehicles = await vehicle_getBySubString(subs);
    res.status(200).json(vehicles);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getVehicleByOwnerId = async (
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
  };
