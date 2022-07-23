import { ProductDatabase } from "../data/ProductDatabase";
import { CustomError } from "../error/customError";
import { product } from "../model/type";


export class ProductBusiness {
  public createProduct = async (input: product): Promise<void> => {
    try {
      const { id, name, tags } = input;

      if ( !id || !name || !tags) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "tags"'
        );
      }


      const product: product = {
        id,
        name,
        tags,
      };
      const productDatabase = new ProductDatabase();
      await productDatabase.insertProduct(product);


    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  static getByName: any;
  static getBy: any;

  async getProductById(input: {id:string}) {
				
    if(!input.id){
      throw new Error("Insira um id!")
    }

    return await new ProductDatabase().getProductById(input.id);
  }

  async getProductByName(input: { name: string}) {
	try{			
    const { name } = input
    
    const productDatabase = new ProductDatabase();
    const product = await productDatabase.getProductByName(name);

    return product
  } catch (error: any) {
    throw new CustomError(400, error.message);
  }

  }
  
}
