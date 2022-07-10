import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO, LoginInputDTO, GetUserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response):Promise<void> => {
        try {
          const { name, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.singup(input);
    
          res.status(201).send({ message: "Token gerado com sucesso", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   

      public login = async (req: Request, res: Response):Promise<void> => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  

      public getUser = async (req: Request, res: Response):Promise<void> => {
        try {
          
          const input: GetUserInputDTO = {
          token: req.headers.authorization! 
          };
    
          const userBusiness = new UserBusiness()
          await userBusiness.getUser(input);
    
          res.status(201).send({ message: "Usuário identificado." });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
    }
