import { Request, Response } from "express";



export const create = async (req: Request, res: Response) => {

    const data = req.body;

    if(!data) { 
        res.status(400).json({ error: 'Todos os campos são obrigatórios.' })
    }else{
        res.send(data).json;
    };

    res.send('CALCULO DA ROTA criada!!!');
};