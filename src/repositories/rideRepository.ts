import { AppDataSource } from "../data-source";
import { Ride } from "../entities/rides";
import { Driver } from "../entities/drivers";

export const rideRepository =  AppDataSource.getRepository(Ride); 
export const driversRepository = AppDataSource.getRepository(Driver);