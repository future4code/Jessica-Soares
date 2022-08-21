import { CompeticaoDatabase } from "../data/CompeticaoDatabase";
import { CustomError } from "../error/customError";
import { atletaInput, partidaInput } from "../model/type";
import { IdGenerator } from "../services/IdGenerator";


export class CompeticaoBusiness {

  public criarCompeticao = async (input: partidaInput): Promise<void> => {
    try {
      const {competicao, data, status } = input;

      if (!competicao || !data || !status) {
        throw new CustomError(
          400,
          'Preencha todos os campos'
        );
      }

      
      const idGenerator = new IdGenerator()
      const id: string = idGenerator.generateId()

      
      const competicaoDatabase = new CompeticaoDatabase();
      await competicaoDatabase.criarCompeticao(
        id,
        competicao, 
        data,
        status
      );


    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public inserirAtleta = async (input: atletaInput): Promise<void> => {
    try {
      const {competicao, atleta, valor, unidade } = input;

      if (!competicao || !atleta || !valor|| !unidade) {
        throw new CustomError(
          400,
          'Preencha todos os campos'
        );
      }

      const localizarCompeticao = new CompeticaoDatabase();
      const competicoes = await localizarCompeticao.buscarCompeticao(competicao)


      if (!competicoes) {
        throw new CustomError(
          400, 
          "Competição não cadastrada.");
      }

      
      const idGenerator = new IdGenerator()
      const id: string = idGenerator.generateId()

      
      const competicaoDatabase = new CompeticaoDatabase();
      await competicaoDatabase.inserirAtleta(
        id,
        competicao, 
        atleta, 
        valor, 
        unidade
      );

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public ordenarAtletas = async(input: {competicao:string}) => {
				
    if(!input.competicao){
      throw new Error("Insira competicao!")
    }
  
    return await new CompeticaoDatabase().ordenarAtletas(input.competicao);
  }
  
}