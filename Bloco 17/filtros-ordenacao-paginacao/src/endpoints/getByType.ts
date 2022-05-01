import { Request, Response } from "express";
import connection from "../data/connection";
import { user } from "../types";


export async function getByType(req: Request,res: Response): Promise<void> {
    try {

        let type = req.params.type;

       const users = await connection("aula48_exercicio")
          .select()
          .where("type", "like", `%${type}%`);

          const usersType = users.map(toUsersType);

       res.status(200).send(usersType)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const toUsersType = (input: any):user => {
    return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
    };
  };