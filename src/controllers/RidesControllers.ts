import { Request, Response } from "express";
import { rideRepository } from "../repositories/rideRepository";
import { AppDataSource } from "../data-source";
import { Ride } from "../entities/rides";
 

export class RidesControllers {
    async create(req: Request, res: Response) {
        const { customer_id, origin, destination, distance, duration, driver, value } = req.body;

        console.log('Dados que estão chegando: ', customer_id, origin, destination, distance, duration, driver, value)

        if(!customer_id || !origin || !destination || !distance || !duration|| !driver || !value) {
            res.status(400).json({ mensagem: "Campo obrigatório não preenchido." });
        }

        if(origin === destination) {
            res.status(400).json({ mensagem: "A origem e o destino não podem ser iguais." });
        }

        try{
            const newRide = rideRepository.create({
                customer_id: customer_id, 
                origin: origin, 
                destination: destination, 
                distance: distance, 
                duration: duration, 
                driver: driver, 
                value: value,
            });
    
            await rideRepository.save(newRide);
            res.status(201).json(newRide);
            
        }catch(error) {
            res.status(500).json({ mensagem: "Erro interno do servidor" });
        };
    };

    async read(req: Request, res: Response){
        const { id } = req.params;

        try{
            const rideRepository = AppDataSource.getRepository(Ride);
            const ride = await rideRepository.findOneBy({ id: parseInt(id, 10)});

            if (!ride) {
                res.status(404).json({ message: "Viagem não encontrada" });
            }

            res.status(200).json(ride);
        }catch{
            res.status(500).json({ message: "Erro ao listar viagens" });
        };

    };
};