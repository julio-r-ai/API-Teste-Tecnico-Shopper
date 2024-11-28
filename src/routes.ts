import { Router } from "express";
import { RidesControllers } from "./controllers/RidesControllers";
import { DriversControllers } from "./controllers/DriversControllers";
import cors from 'cors';
import { apiGoogle } from "./services/apiGoogle";

const routes = Router();

routes.use(cors());

routes.post('/createRide', new RidesControllers().create);

routes.get('/listRide/:id', new RidesControllers().read);
routes.get('/listDrivers', new DriversControllers().read);
routes.get('/apiGoogle', new apiGoogle().read);

export default routes;