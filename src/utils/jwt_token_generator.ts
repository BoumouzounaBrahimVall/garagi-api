import jwt from "jsonwebtoken";
import { SECRET_ACCESS_TOKEN } from "./constants";

export const generateAccessToken:any = (username: string) => {
  let payload = {
    id: username,
  };
  return jwt.sign(payload, SECRET_ACCESS_TOKEN as string, {
    expiresIn: "30d",
  });
};
