import { CustomError, UserNotFoud } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
import { GetUserInput } from "../model/user";
import { userInfo } from "os";

export class UserDatabase extends BaseDatabase {
  
  public sigup = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("user_cookenu");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string):Promise<user> => {
    try {
      const result = await UserDatabase.connection("user_cookenu").where({email})
      
      if(!result.length) {
        throw new UserNotFoud()
      }

     return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUser = async (user: GetUserInput):Promise<string> => {
    try {
      const getUser = await UserDatabase.connection
      .select("*")
      .from("user_cookenu")
      .where({ id: user.id });

      const result = getUser.map(getUser=> new getUser(user.id))
      return result [0]
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
 }