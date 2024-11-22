import { Router } from "express";

import { RegisterTripsControllers, ListTripsControllers } from "../../controllers";

export const router = Router();

router.get("/", (req, res) => {                 
    res.send("Olá, estou funcionando...");
});

router.post("/registerTrips", RegisterTripsControllers.create);
router.get("/listTrips", ListTripsControllers.read);
