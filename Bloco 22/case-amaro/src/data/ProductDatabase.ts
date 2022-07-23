import { CustomError } from "../error/customError";
import { product } from "../model/type";
import { BaseDatabase } from "./BaseDatabase";
import {Request, Response} from "express"


export class ProductDatabase extends BaseDatabase {
  
  public insertProduct = async (product: product) => {
    try {
      await ProductDatabase.connection
        .insert({
          id: product.id,
          name: product.name,
          tags: product.tags,
        })
        .into("Products_Amaro");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public async getProductById(id: string): Promise<void> {
    try {
      const product = await ProductDatabase.connection()
        .where({ id })
        .select("*")
        .from("Products_Amaro")

        return product[0]
				
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getProductByName(name: string): Promise<void> {
    try {
      const product = await ProductDatabase.connection()
        .where("name", "LIKE", `%${name}%`)
        .select("*")
        .from("Products_Amaro") 
      return product[0]
				
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}