import express from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors())

//Exercício 1

app.get("/", (request, response) => {
    
    response.send("Hello from express")
    
})

app.listen(3000, () => {
    console.log("A porta 3000 está rodando.")
})

//Exercício 2

type User = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
    
}

//Exercício 3

const users: User[] = [
   
    {
        id: "123",
        name: "Mariah",
        phone: 321,
        email: "mariah@gmail.com",
        website: "mariah.com.br"
    },
    {
        id: "456",
        name: "Sandra",
        phone: 654,
        email: "sandra@gmail.com",
        website: "sandra.com.br"
    },
    {
        id: "789",
        name: "Yoon",
        phone: 987,
        email: "yoon@gmail.com",
        website: "yoon.com.br"
    }
]

// Exercício 4

app.get("/users", (request, response) => {
    if(!users.length){
        response.status(401).send("Não há usuários.")
    }

    response.status(201).send(users)
})

//Exercício 5

type Post  = {
    id: string,
    title: string,
    body: string,
    userId: string
}

//Exercício 6

const posts: Post[] = [
    {
        id: "123",
        title: "Passeando",
        body: "Fui à praia hoje",
        userId: "321" 
        },
    {
        id: "456",
        title: "Trabalho",
        body: "Dia cansativo",
        userId: "654"
    },
    {
        id: "789",
        title: "Folga",
        body: "Dormir, dormir, dormir!",
        userId: "987"
    }
]

//Exercício 7

app.get("/posts", (request, response) => {
    if(!posts.length){
        response.status(401).send("Não há posts.")
    }

    response.status(201).send(posts)
})

// Exercício 8

app.get("/post/:userId", (request, response) => {

    let user = request.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(!user) {
        return response.status(400).send("Entre com userId válido.")
     } else if(post.length === 0) {
        return response.status(400).send("Nenhum resultado encontrado.")
     }
        
        response.status(201).send(post)   
})


app.listen(3001, () => {

    console.log("A porta 3001 está rodando.")
})

