import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Driver } from "../entities/drivers";

export class DriversControllers {

    async read(req: Request, res: Response){
        
        try{
            const driversRepository = AppDataSource.getRepository(Driver);
            const drivers = await driversRepository.find();

            if(!drivers){
                res.status(404).json({ message: "Lista de motorista não encontrada" });
            };

            res.json(drivers);
        }catch(error){
            res.status(500).json({ message: "Erro ao listar motoristas" });
        } 
          
    };
};