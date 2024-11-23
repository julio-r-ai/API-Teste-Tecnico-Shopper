import { Router } from "express";

import { RegisterTripsControllers, ListTripsControllers, CalculateDistanceControllers } from "../../controllers";

export const router = Router();

router.get("/", (req, res) => {                 
    res.send("Olá, estou funcionando...");
});

router.post("/calculateDistance", CalculateDistanceControllers.create);
router.post("/registerTrips", RegisterTripsControllers.create);
router.get("/listTrips", ListTripsControllers.read);