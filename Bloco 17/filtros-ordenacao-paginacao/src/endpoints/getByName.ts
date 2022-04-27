import { Request, Response } from "express";
import connection from "../data/connection";
import { user } from "../types";


export async function getByName(req: Request,res: Response): Promise<void> {
    try {

        let name = req.query.name;

       const user = await connection("aula48_exercicio")
          .select()
          .where("name", "like", `%${name}%`);

          const userName = user.map(toUserName);

       res.status(200).send(userName)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const toUserName = (input: any):user => {
    return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
    };
  };