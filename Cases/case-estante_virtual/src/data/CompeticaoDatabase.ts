import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";



export class CompeticaoDatabase extends BaseDatabase {

    public criarCompeticao = async (
        id: string,
        competicao: string, 
        data: string,
        status: string) => {
      try {
        await CompeticaoDatabase.connection
          .insert({
            id,
            competicao, 
            data,
            status})
          .into("Competicao_EstanteVirtual");
      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };

  
    public inserirAtleta = async (
        id: string,
        competicao: string, 
        atleta: string, 
        valor: number, 
        unidade: string) => {
      try {
        await CompeticaoDatabase.connection
          .insert({
            id,
            competicao, 
            atleta, 
            valor, 
            unidade})
          .into("Atleta_EstanteVirtual");
      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };

    public async buscarCompeticao(competicao: string) {
        try {
          const resultado = await CompeticaoDatabase.connection()
          .where({ competicao })
          .from("Competicao_EstanteVirtual")
            
          return resultado[0]
            
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      };

    public async ordenarAtletas(competicao: string) {
        try {
          if( competicao === "100m rasos"){
            const atletas = await CompeticaoDatabase.connection()
            .where({ competicao })
            .select("*")
            .from("Atleta_EstanteVirtual")
            .orderBy("valor", "asc")
           
            return atletas
          }
          
          if( competicao === "Lançamento de dardo"){
            const atletas = await CompeticaoDatabase.connection()
            .where({ competicao })
            .select("*")
            .from("Atleta_EstanteVirtual")
            .orderBy("valor", "desc")
             
            return atletas
          }

            if(!competicao){
              throw new CustomError(
              400,
              'Competição não cadastrada.'
          )}

        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
    }
}

