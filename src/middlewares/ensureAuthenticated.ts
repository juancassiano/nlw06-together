import {Request, Response, NextFunction} from 'express';



export function ensureAuthenticated(request:Request, response:Response, Next:NextFunction){
  const {token} = request.headers.authorization;
  console.log(token);

  return Next();
}