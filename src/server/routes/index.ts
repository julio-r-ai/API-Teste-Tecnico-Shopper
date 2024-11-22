import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {                 
    res.send("Olá, estou funcionando");
});

router.post("/teste", (req, res) => {    
    console.log(req.body);     
    
    res.json(req.body);
});