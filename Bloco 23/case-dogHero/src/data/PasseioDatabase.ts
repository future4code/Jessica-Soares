import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";
import { passeio, passeioInput } from "../model/type";
import {Request, Response} from "express"


export class PasseioDatabase extends BaseDatabase {
  
    public inserirPasseio = async (
        id: string,
        status: string,
        data: string,
        duração: number,
        quantidade_dogs: number,
        hora_início: string,
        preço_total: number) => {
      try {
        await PasseioDatabase.connection
          .insert({
            id,
            status,
            data,
            duração,
            quantidade_dogs,
            hora_início,
            preço_total
          })
          .into("Passeio_DogHero");
      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };

    public editarPasseio = async (
        id: string,
        status: string,
        data: string,
        duração: number,
        quantidade_dogs: number,
        hora_início: string,
        preço_total: number) => {
        try {
          await PasseioDatabase.connection
            .update({ 
            status,
            data,
            duração,
            quantidade_dogs,
            hora_início,
            preço_total})
            .where({ id })
            .into("Passeio_DogHero");
        } catch (error: any) {
          throw new CustomError(400, error.message);
        }
      };
    
      public async localizarPasseio(status: string): Promise<void> {
        try {
          const passeio = await PasseioDatabase.connection()
            .where({ status })
            .select("*")
            .from("Passeio_DogHero")

            return passeio[0]
            
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}