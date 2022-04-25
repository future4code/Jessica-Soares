import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { v4 as generateId } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());


      //Servidor:

      const server = app.listen(3003, () => {
        if (server) {
          const address = server.address() as AddressInfo;
          console.log(`Server is running in https://localhost:${address.port}`);
        } else {
          console.error(`Server is not running in https://localhost`);
        }
      });
  

      //Possíveis erros
      const Errors: { [chave: string]: { status: number, message: string } } = {
        MISSING_NAME: {status: 400, message: "Favor informar nome no body."},
        MISSING_NICKNAME: {status: 400, message: "Favor informar nickname no body."},
        MISSING_EMAIL: {status: 400, message: "Favor informar email no body."},
        SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado!"},
     }
      
      //1 - Criando usuário

  
      app.post("/user", async (req: Request, res: Response): Promise<void> => {
        try {
          const userId = generateId();
          const userName = req.body.name;
          const userNickname = req.body.nickname;
          const userEmail = req.body.email;
        
        
        if(!userName) {
            throw new Error(Errors.MISSING_NAME.message);
        }
    
        if(!userNickname) {
            throw new Error(Errors.MISSING_NICKNAME.message);
        }

        if(!userEmail) {
          throw new Error(Errors.MISSING_EMAIL.message);
      }
  
          await connection("ToDoListUser").insert({
            id: userId,
            name: userName,
            nickname: userNickname,
            email: userEmail,
          });

    
          res.status(200).send({ message: "Usuário criado" });

        } catch (error: any) {
          switch(error.message) {
            case Errors.MISSING_NAME.message:
                res.status(Errors.MISSING_NAME.status).send(Errors.MISSING_NAME.message);
                break;
            case Errors.MISSING_NICKNAME.message:
                res.status(Errors.MISSING_NICKNAME.status).send(Errors.MISSING_NICKNAME.message);
                break;
            case Errors.MISSING_EMAIL.message:
                res.status(Errors.MISSING_EMAIL.status).send(Errors.MISSING_EMAIL.message);
                break;      
           default:
              res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
          }
        }
      });

      
      //Pegando todos usuários
      app.get("/getUsers", async (req: Request, res: Response): Promise<void> => {
        try {
          
            const result =  await connection("ToDoListUser").select()
      
          res.status(200).send(result);
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });


      //Deletando usuário pelo id
      app.delete("/deleteUser/:id", async (req: Request, res: Response): Promise<void> => {
        try {
          await connection("ToDoListUser").delete().where({ id: req.params.id });
      
          res.status(200).send({ message: "Usário deletado" });
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      }); 


      //2 - Pegando usuário pelo id *Falta mensagem de erro no caso do id não encontrado
      app.get("/getUser/:id", async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await connection("ToDoListUser")
            .select("nickname")
            .where({ id: req.params.id });
      
          res.status(200).send(result);
        } catch (error: any) {
          res.status(500).send(error.sqlMessage || error.message);
        }
      });

      //3 - Editando usuário pelo id
      app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
        try {
          const userName = req.body.name;
          const userNickname = req.body.nickname;
         
        if(!userName) {
            throw new Error(Errors.MISSING_NAME.message);
        }
    
        if(!userNickname) {
            throw new Error(Errors.MISSING_NICKNAME.message);
        }

        await connection("ToDoListUser").update({
          name: userName,
          nickname: userNickname,
        })
        .where({ id: req.params.id });

        res.status(200).send({ message: "Usuário editado" });

      } catch (error: any) {
        switch(error.message) {
          case Errors.MISSING_NAME.message:
              res.status(Errors.MISSING_NAME.status).send(Errors.MISSING_NAME.message);
              break;
          case Errors.MISSING_NICKNAME.message:
              res.status(Errors.MISSING_NICKNAME.status).send(Errors.MISSING_NICKNAME.message);
              break;   
         default:
            res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
        }
      }
    });
    
      