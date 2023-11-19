import { NextFunction, Request, Response } from "express"

// this function is utilizing the concept of the currying inside ts 
// i want to return a function from it 
// validating the requst agains the passed schema 
const validate = (schema) => (req: Request, res: Response, next: NextFunction) => { 
    
}