import { Request, Response } from "express";
import { PasseioBusiness } from "../business/PasseioBusiness";
import { passeioInput } from "../model/type";
import { PasseioDatabase } from "../data/PasseioDatabase";

export class PasseioController {

    public criarPasseio = async (req: Request, res: Response) => {
      try {
        const { 
            id,
            status,
            data,
            duração,
            quantidade_dogs,
            hora_início } = req.body;
  
        const input: passeioInput = {
            id,
            status,
            data,
            duração,
            quantidade_dogs,
            hora_início,
        };
        const passeioBusiness = new PasseioBusiness()
        await passeioBusiness.criarPasseio(input);
  
        res.status(201).send({ message: "Passeio criado." });
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    }

    public editarPasseio = async (req: Request, res: Response) => {
        try {
          
          const input: passeioInput = {
            id: req.params.id,
            status: req.body.status,
            data: req.body.data,
            duração: req.body.duração,
            quantidade_dogs: req.body.quantidade_dogs,
            hora_início: req.body.hora_início
          };

          const passeioBusiness = new PasseioBusiness()
          passeioBusiness.editarPasseio(input);
    
          res.status(201).send({ message: "Passeio alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
      
      async localizarPasseio(req: Request, res: Response): Promise<void>  {

        try {
            const input = {
                status: req.params.status
            }

          const passeioBusiness = new PasseioBusiness()
          const resultado = await passeioBusiness.localizarPasseio(input)
           
          res.status(200).send( resultado );

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

    }
}
