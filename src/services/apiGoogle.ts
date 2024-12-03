import { Request, Response } from "express";
import { Client } from "@googlemaps/google-maps-services-js";
import { config } from "dotenv";

config();

const googleMapsClient = new Client({});

export class apiGoogle {
    async read(req: Request, res: Response){
        const {origin, destination } = req.body;
        console.log('VALORES RECEBIDOS: ', origin, destination);

        
        if (!origin || !destination) {
            res.status(400).json({ error: 'Os campos estão chegando vasio.' });
        }

        const googleApiKey: string | undefined = process.env.GOOGLE_API_KEY;

        if (!googleApiKey) {
            throw new Error("A chave da API do Google não está configurada. Certifique-se de definir 'GOOGLE_API_KEY' no arquivo .env.");
        }

        try {
            const response = await googleMapsClient.directions({
                params: {
                    origin,
                    destination,
                    key: googleApiKey,
                },
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