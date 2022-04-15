"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3000, () => console.log("Servidor rodando....."));
app.get('/users', (request, response) => {
    const clients = data_1.users.map((user) => user).flat(1);
    response.status(210).send(clients);
});
const Errors = {
    MISSING_NAME: { status: 400, message: "Favor informar nome no body." },
    MISSING_CPF: { status: 400, message: "Favor informar CPF no body." },
    MISSING_AGE: { status: 400, message: "Favor informar idade no body." },
    NOT_ALLOWED_AGE: { status: 400, message: "Usuário deve possuir mais do que 18 anos para conseguir se cadastrar." },
    SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
};
app.post('/add', (request, response) => {
    try {
        const userName = request.body.name;
        const userCPF = request.body.cpf;
        const userAge = request.body.age;
        if (!userName) {
            throw new Error(Errors.MISSING_NAME.message);
        }
        if (!userCPF) {
            throw new Error(Errors.MISSING_CPF.message);
        }
        if (!userAge) {
            throw new Error(Errors.MISSING_AGE.message);
        }
        if (userAge < 18) {
            throw new Error(Errors.NOT_ALLOWED_AGE.message);
        }
        const newUser = {
            id: (0, uuid_1.v4)(),
            name: userName,
            cpf: Number(userCPF),
            age: Number(userAge)
        };
        data_1.users.push(newUser);
        response.status(201).send("ok");
    }
    catch (error) {
        switch (error.message) {
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
                response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        }
    }
});
