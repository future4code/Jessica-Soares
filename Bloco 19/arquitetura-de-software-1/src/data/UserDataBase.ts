import { user } from "../types/user";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {

public insertUser = async (
    user: user
  ): Promise<void> => {
    try {
      await UserDatabase.connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
        }).into("User_Arq");
        
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}