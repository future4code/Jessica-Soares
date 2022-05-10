import express, { Request, Response } from "express";
import cors from "cors";
import connection from "../data/connection";

const app = express();
app.use(express.json());
app.use(cors());

//Pegando todos produtos
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      
        const result =  await connection("labecommerce_products").select()
  
      res.status(200).send(result);
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  };