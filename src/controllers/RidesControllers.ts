import { Request, Response } from "express";
import { rideRepository } from "../repositories/rideRepository";
import { Client } from "@googlemaps/google-maps-services-js";
import { AppDataSource } from "../data-source";
import { Ride } from "../entities/rides";
 
const googleMapsClient = new Client({});

export class RidesControllers {
    async create(req: Request, res: Response) {
        const { customer_id, origin, destination } = req.body;

        if (!customer_id || !origin || !destination) {
            res.status(400).json({ mensagem: "Campo obrigatório não preenchido." });
        }

        if (origin === destination) {
            res.status(400).json({ mensagem: "A origem e o destino não podem ser iguais." });
        }

        try {
            const response = await googleMapsClient.directions({
                params: {
                    origin,
                    destination,
                    key: process.env.GOOGLE_API_KEY || 'AIzaSyAzO8b9j2-yTr1pk5VdypnzHxIo2sEnoVE',
                }, //FAZER COM QUE A CHAVE DO GOOGLE NÂO MOSTRE DEPOIS
            });

            if (!response.data.routes || response.data.routes.length === 0) {
                res.status(404).json({ error: "Nenhuma rota encontrada." });
            }

            const route = response.data.routes[0];

            if (!route.legs || route.legs.length === 0) {
                res.status(404).json({ error: "Nenhuma informação sobre o trajeto encontrada." });
            }

            const distanceKm = route.legs[0].distance.text;
            const distance : number = parseFloat(distanceKm.replace(" km", ""));

            const duration = route.legs[0].duration.text;

            const newRide = rideRepository.create({
                customer_id,
                origin,
                destination,
                distance,
                duration,
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