import express, { Request, Response } from "express";
import cors from "cors";
import { toDoList } from "./data";


const app = express();

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log("Servidor rodando...")
})

//Exercício 1

app.get("/ping", (request, response) => {          
    response.send("Pong! 🏓")
})

//Exercício 4

app.get("/toDoList/completed/:isCompleted", (request, response) => {
let isCompleted: any = request.params.isCompleted

if (isCompleted === "true") {
    isCompleted = true
} else if (isCompleted === "false") {
    isCompleted = false
} else {
    response.send("Path param da tarefa deve ser 'true' ou 'false'")
}

const result = []

for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].completed === isCompleted) {
    result.push(toDoList[i])
    }
}

response.send(result)
})
 