
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {

    public createUser = async (
        req: Request,
        res: Response
     ) => {
        
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }

            const userBusiness = new UserBusiness
            userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}