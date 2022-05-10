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
    MISSING_PRICE: {status: 400, message: "Favor informar preço no body."},
    MISSING_URL: {status: 400, message: "Favor informar URL no body."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado!"},
 }
  
  // Criando produto


  export const createProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId = generateId();
      const productName = req.body.name;
      const productPrice = req.body.price;
      const productURL = req.body.image_url;
      
    
    if(!productName) {
        throw new Error(Errors.MISSING_PRICE.message);
    }

    if(!productPrice) {
        throw new Error(Errors.MISSING_PRICE.message);
    }

    if(!productURL) {
      throw new Error(Errors.MISSING_URL.message);
  }

      await connection("labecommerce_products").insert({
        id: productId,
        name: productName,
        price: Number(productPrice),
        image_url: productURL,
      });


      res.status(200).send({ message: "Produto criado" });

    } catch (error: any) {
      switch(error.message) {
        case Errors.MISSING_NAME.message:
            res.status(Errors.MISSING_NAME.status).send(Errors.MISSING_NAME.message);
            break;
        case Errors.MISSING_PRICE.message:
            res.status(Errors.MISSING_PRICE.status).send(Errors.MISSING_PRICE.message);
            break;
        case Errors.MISSING_URL.message:
            res.status(Errors.MISSING_URL.status).send(Errors.MISSING_URL.message);
            break;      
       default:
          res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
      }
    }
  };
