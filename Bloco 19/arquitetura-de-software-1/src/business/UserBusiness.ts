import { v4 as generateId } from "uuid";
import { UserDatabase } from "../data/UserDataBase";
import { user } from "../types/user";


export class UserBusiness {

public createUser = async (input: any) => {
   try {
     const { name, email, password } = input;
 
     if (!name || !email || !password) {
       throw new Error(
         'Preencha os campos "name", "email" e "password"'
       );
     }
 
     const id: string = generateId();
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       email,
       password,
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

 async get(): Promise<user[]>  {
				
  return await new UserDatabase().get();
  }

  async deleteUser(input: {id:string}) {
				
    if(!input.id){
      throw new Error("Insira um id!")
    }

    return await new UserDatabase().deleteUser(input.id);
  }
}



