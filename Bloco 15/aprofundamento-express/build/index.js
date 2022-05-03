"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3000, () => {
    console.log("Servidor rodando...");
});
//Exercício 1
app.get("/ping", (request, response) => {
    response.send("Pong! 🏓");
});
//Exercício 4
app.get("/toDoList/completed/:isCompleted", (request, response) => {
    let isCompleted = request.params.isCompleted;
    if (isCompleted === "true") {
        isCompleted = true;
    }
    else if (isCompleted === "false") {
        isCompleted = false;
    }
    else {
        response.send("Path param da tarefa deve ser 'true' ou 'false'");
    }
    const result = [];
    for (let i = 0; i < data_1.toDoList.length; i++) {
        if (data_1.toDoList[i].completed === isCompleted) {
            result.push(data_1.toDoList[i]);
        }
    }
    response.send(result);
});
