import { Request, Response } from "express";




export const read = (req: Request, res: Response) => {
    res.send('Listando viagens!!!');
};