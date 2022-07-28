import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { product } from "../model/type";
import { ProductDatabase } from "../data/ProductDatabase";

export class ProductController {

      public createProduct = async (req: Request, res: Response) => {
        try {
          const { id, name, tags } = req.body;
    
          const input: product = {
            id,
            name,
            tags
          };
          const productBusiness = new ProductBusiness()
          await productBusiness.createProduct(input);
    
          res.status(201).send({ message: "Produto inserido." });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
      async getProductById(req: Request, res: Response): Promise<void>  {

        try {
            const input = {
                id: req.params.id
            }

           const product = await new ProductBusiness().getProductById(input);

           res.send(product).status(200);

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

    }

    async getProductByName(req: Request, res: Response): Promise<void>  {

      try {
        const input = {
          name: req.body.name
      }

         const product = await new ProductBusiness().getProductByName(input);

         res.send(product).status(200);
        
      } catch (error:any) {
          res.status(400).send({ error: error.message });
      }

  }
}

