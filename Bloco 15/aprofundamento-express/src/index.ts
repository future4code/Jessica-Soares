import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (request, response) => {
    
    response.send("Hello from express")
    
})

app.listen(3003, () => {
    console.log("Servidor rodando...")
})