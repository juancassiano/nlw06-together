import {Request, Response, NextFunction} from 'express';

export function ensureAdmin(request:Request, response:Response, Next:NextFunction){

  const admin = true;

  if(admin){ 
    return Next();
  }
  return response.status(401).json({
    error:"Unauthorized"
  })
}