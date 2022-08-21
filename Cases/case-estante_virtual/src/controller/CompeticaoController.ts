import { Request, Response } from "express";
import { CompeticaoBusiness } from "../business/CompeticaoBusiness";
import { atletaInput, partidaInput } from "../model/type";
import { CompeticaoDatabase } from "../data/CompeticaoDatabase";
import { CustomError } from "../error/customError";

export class CompeticaoController {

    public criarCompeticao = async (req: Request, res: Response) => {
        try {
          const { competicao, data, status } = req.body;
       
          const partida: partidaInput= {
              competicao, 
              data,
              status
          };
          const competicaoBusiness = new CompeticaoBusiness()
          await competicaoBusiness.criarCompeticao(partida);
    
          res.status(201).send({ message: "Competição criada!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  
      

    public inserirAtleta = async (req: Request, res: Response) => {
      try {
        const { competicao, atleta, valor, unidade } = req.body;
     
        const partida: atletaInput= {
            competicao, 
            atleta, 
            valor, 
            unidade
        };

        const competicaoBusiness = new CompeticaoBusiness()
        await competicaoBusiness.inserirAtleta(partida);

  
        res.status(201).send({ message: "Atleta inserido na competição!" });
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };
    

    
    public ordenarAtletas = async (req: Request, res: Response) => {
        try {
          
          const input = {
            competicao: req.body.competicao
          };

          const competicaoBusiness = new CompeticaoBusiness()
          const resultado = await competicaoBusiness.ordenarAtletas(input)
          
    
          res.status(200).send( resultado );

        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
}    