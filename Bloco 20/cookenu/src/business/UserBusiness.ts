import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  LoginInputDTO,
  user,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";

export class UserBusiness {

  public singup = async (input: UserInputDTO) => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password"'
        );
      }


      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = generateId();

      const user: user = {
        id,
        name,
        email,
        password,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.sigup(user);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({ id });

      return token;
     
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if( password !== user.password){
        throw new InvalidPassword()
      }

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({id: user.id})

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}