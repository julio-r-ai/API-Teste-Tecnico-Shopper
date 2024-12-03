import { Router } from "express";
import { RidesControllers } from "./controllers/RidesControllers";
import { DriversControllers } from "./controllers/DriversControllers";
import cors from 'cors';
import { apiGoogle } from "./services/apiGoogle";

const routes = Router();

routes.use(cors());

routes.post('/createRide', new RidesControllers().create);
routes.post('/apiGoogle', new apiGoogle().read);

routes.get('/listRide/:id', new RidesControllers().read);
routes.get('/listDrivers', new DriversControllers().read);

export default routes;