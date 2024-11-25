import { Router } from "express";
import { RidesControllers } from "./controllers/RidesControllers";
import { DriversControllers } from "./controllers/DriversControllers";

const routes = Router();

routes.post('/createRide', new RidesControllers().create);

routes.get('/listRide/:id', new RidesControllers().read);
routes.get('/listDrivers', new DriversControllers().read);

export default routes;