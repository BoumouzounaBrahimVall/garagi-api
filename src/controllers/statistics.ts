import { statistics_get } from "../db/statistics";
import express from "express";

export const getStatistics = async (
  req: express.Request,
  res: express.Response
) => {
  try {
   
  const statistics =await statistics_get();

    res.status(200).json(statistics);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
