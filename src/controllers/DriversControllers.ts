import { Request, Response } from "express";

export class DriversControllers {

    async read(req: Request, res: Response){
        res.json('RODANDO...!');
    };

};