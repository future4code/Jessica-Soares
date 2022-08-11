import { PasseioDatabase } from "../data/PasseioDatabase";
import { CustomError } from "../error/customError";
import { passeio, passeioInput } from "../model/type";


export class PasseioBusiness {
  static localizarTodos: any;
    async criarPasseio (passeio: passeioInput) { 
  
        if ( !passeio.id ||
            !passeio.status||
            !passeio.data ||
            !passeio.duração ||
            !passeio.quantidade_dogs ||
            !passeio.hora_início) {

          throw new CustomError(
            400,
            'Preencha todos os campos.'
          );
        }
  
          if(passeio.duração === 30){
               const preço_total = 25 + (passeio.quantidade_dogs - 1) * 15
  
              const passeioDatabase = new PasseioDatabase();
              await passeioDatabase.inserirPasseio(
                passeio.id,
                passeio.status,
                passeio.data,
                passeio.duração,
                passeio.quantidade_dogs,
                passeio.hora_início, 
                preço_total);
              
          } else {
            if(passeio.duração === 60){
              const preço_total = 35 + (passeio.quantidade_dogs - 1) * 20

              const passeioDatabase = new PasseioDatabase();
              await passeioDatabase.inserirPasseio(
                passeio.id,
                passeio.status,
                passeio.data,
                passeio.duração,
                passeio.quantidade_dogs,
                passeio.hora_início, 
                preço_total);
            }else{
              throw new Error("Escolha entre 30 ou 60 minutos")
            }
          }
            
      }

      async editarPasseio (passeio: passeioInput)  {
    
              if ( !passeio.id ||
                !passeio.status||
                !passeio.data ||
                !passeio.duração ||
                !passeio.quantidade_dogs ||
                !passeio.hora_início) {
    
              throw new CustomError(
                400,
                'Preencha todos os campos.'
              );
            }

            if(passeio.duração === 30){
              const preço_total = 25 + (passeio.quantidade_dogs - 1) * 15
 
             const passeioDatabase = new PasseioDatabase();
             await passeioDatabase.editarPasseio(
               passeio.id,
               passeio.status,
               passeio.data,
               passeio.duração,
               passeio.quantidade_dogs,
               passeio.hora_início, 
               preço_total);
             
         } else {
           if(passeio.duração === 60){
             const preço_total = 35 + (passeio.quantidade_dogs - 1) * 20

             const passeioDatabase = new PasseioDatabase();
             await passeioDatabase.editarPasseio(
               passeio.id,
               passeio.status,
               passeio.data,
               passeio.duração,
               passeio.quantidade_dogs,
               passeio.hora_início, 
               preço_total);
           }else{
             throw new Error("Escolha entre 30 ou 60 minutos")
           }
         }
      }

      
      async localizarPasseio(input: {status:string}) {
				
        if(!input.status){
          throw new Error("Insira o status!")
        }
    
        return await new PasseioDatabase().localizarPasseio(input.status);
      }
}
  

