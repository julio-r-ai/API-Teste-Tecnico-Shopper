import { Router } from "express";
import { RidesControllers } from "./controllers/RidesControllers";

const routes = Router();

routes.post('/createRide', new RidesControllers().create);

routes.get('/listRide/:id', new RidesControllers().read);

export default routes;