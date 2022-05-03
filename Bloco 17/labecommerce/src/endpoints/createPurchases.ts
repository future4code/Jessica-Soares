import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from 'uuid';
import connection from "../data/connection";

const app = express();
app.use(express.json());
app.use(cors());


  // Criando registro de compra


  export const createPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
      const purchaseId = generateId();
      const userId = req.body.user_id;
      const productId = req.body.product_id;
      const quantityPurchased = req.body.quantity;
      const totalPrice = req.body.quantity * price;
      

      await connection("labecommerce_purchases").insert({
        id: purchaseId,
        user_id: userId,
        product_id: productId,
        quantity: quantityPurchased,
        total_price: totalPrice
      });


      res.status(200).send({ message: "Resgistro criado" });

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
      }
    }
