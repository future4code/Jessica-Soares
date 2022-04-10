import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors())

//Exercício 1

app.get("/teste", (request, response) => {
    
    response.send("A API está funcionando!")
    
})

app.listen(3000, () => {
    console.log("A porta 3000 está rodando.")
})

//Exercício 2