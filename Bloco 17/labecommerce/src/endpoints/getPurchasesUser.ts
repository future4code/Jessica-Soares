import express, { Request, Response } from "express";
import cors from "cors";
import connection from "../data/connection";

const app = express();
app.use(express.json());
app.use(cors());

//Pegando as compra de um usuário

  export const getPurchasesUser = async (req: Request, res: Response): Promise<void> => {
    try {

      const user_id = req.params

      const result = await connection("labecommerce_purchases")
      .select(
          "labecommerce_users.name As user",
          "labecommerce_products.name As product",
          "quantity",
          "total_price As totalPrice",
      )
      .join(
          "labecommerce_users",
          "labecommerce_users.id",
          "labecommerce_purchases.user_id"
      )
      .join(
        "labecommerce_products",
        "labecommerce_products.id",
        "labecommerce_purchases.product_id"
      )
      .where(
           user_id
        )
  
      res.status(200).send(result);
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  };