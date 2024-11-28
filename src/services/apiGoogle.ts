import { Request, Response } from "express";
import { Client } from "@googlemaps/google-maps-services-js";

const googleMapsClient = new Client({});

export class apiGoogle {
    async read(req: Request, res: Response){
        const {origin, destination } = req.body;
        
        if (!origin || !destination) {
            res.status(400).json({ error: 'Os campos chegtando vasio.' });
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

            const origemLatitude = route.bounds.southwest.lat;
            const origemLogitude = route.bounds.southwest.lng;

            const destinationLatitude = route.bounds.northeast.lat;
            const destinationLogitude = route.bounds.northeast.lng;

            res.json({distance, duration, origemLatitude, origemLogitude, destinationLatitude, destinationLogitude}) 
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch geocode data' });
        }

    };
};