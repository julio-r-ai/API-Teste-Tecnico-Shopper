import { Subject } from "typeorm/persistence/Subject";
import { AppDataSource } from "../data-source";
import { Ride } from "../entities/rides";

export const rideRepository =  AppDataSource.getRepository(Ride); 