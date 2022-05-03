import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from 'uuid';
import connection from "../data/connection";

const app = express();
app.use(express.json());
app.use(cors());


  //Possíveis erros
    const Errors: { [chave: string]: { status: number, message: string } } = {
    MISSING_NAME: {status: 400, message: "Favor informar nome no body."},
    MISSING_EMAIL: {status: 400, message: "Favor informar email no body."},
    MISSING_PASSWORD: {status: 400, message: "Favor informar password no body."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado!"},
 }
  
  // Criando usuário


  export const createUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = generateId();
      const userName = req.body.name;
      const userEmail = req.body.email;
      const userPassword = req.body.password;
      
      await connection("labecommerce_users").insert({
        id: userId,
        name: userName,
        email: userEmail,
        password: userPassword,
      });


      res.status(200).send({ message: "Usuário criado" });

    } catch (error: any) {
      switch(error.message) {
        case Errors.MISSING_NAME.message:
            res.status(Errors.MISSING_NAME.status).send(Errors.MISSING_NAME.message);
            break;
        case Errors.MISSING_EMAIL.message:
            res.status(Errors.MISSING_EMAIL.status).send(Errors.MISSING_EMAIL.message);
            break;
        case Errors.MISSING_PASSWORD.message:
            res.status(Errors.MISSING_PASSWORD.status).send(Errors.MISSING_PASSWORD.message);
            break;      
       default:
          res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
      }
    }
  };

/* Ou de maneira mais simples:

} catch (error:any) {
  console.log(error)
  res.send(error.message || error.sqlMessage)
}
} */