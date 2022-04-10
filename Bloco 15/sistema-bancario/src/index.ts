import express, { Request, Response } from 'express';
import cors from 'cors';
import { users } from './data';
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3000, () => console.log("Servidor rodando....."));

//Pegar contas

app.get('/users', (request: Request, response: Response) => {
    const clients = users.map((user) => user).flat(1);
 
    response.status(210).send(clients);
 });

 //Adicionar contas e validar de idade

 const Errors: { [chave: string]: { status: number, message: string } } = {
    MISSING_NAME: {status: 400, message: "Favor informar nome no body."},
    MISSING_CPF: {status: 400, message: "Favor informar CPF no body."},
    MISSING_AGE: {status: 400, message: "Favor informar idade no body."},
    NOT_ALLOWED_AGE: {status: 400, message: "Usuário deve possuir mais do que 18 anos para conseguir se cadastrar."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
 }

app.post('/add', (request: Request, response: Response) => {

try {

const userName = request.body.name;
const userCPF = request.body.cpf;
const userAge = request.body.age;

    if(!userName) {
        throw new Error(Errors.MISSING_NAME.message);
   }
    if(!userCPF) {
        throw new Error(Errors.MISSING_CPF.message);
 }

    if(!userAge) {
        throw new Error(Errors.MISSING_AGE.message);
 }

    if(userAge < 18) {
        throw new Error(Errors.NOT_ALLOWED_AGE.message);
}
    const newUser = {
       id: generateId(),
       name: userName,
       cpf: Number(userCPF),
       age: Number(userAge)
    }
     
    users.push(newUser);
    response.status(201).send("ok")
 
} catch(error: any) {
    switch(error.message) {
        case Errors.MISSING_NAME.message:
            response.status(Errors.MISSING_NAME.status).send(Errors.MISSING_NAME.message);
            break;
        case Errors.MISSING_CPF.message:
            response.status(Errors.MISSING_CPF.status).send(Errors.MISSING_CPF.message);
            break;
        case Errors.MISSING_AGE.message:
            response.status(Errors.MISSING_AGE.status).send(Errors.MISSING_AGE.message);
            break;
        case Errors.NOT_ALLOWED_AGE.message:
            response.status(Errors.NOT_ALLOWED_AGE.status).send(Errors.NOT_ALLOWED_AGE.message);
            break;      
       default:
          response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
    }
 }

});
