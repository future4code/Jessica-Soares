//Exercício 1.a
//Ao tentar atribuir um número à variável do tipo string, o typescript aponta um erro.

const minhaString : string = "string"


//Exercício 1.b
//Para criarmos no typescript uma variável que aceite mais de um tipo de valor devemos utilizar o onion type.

const meuNumero: number | string = "string"

//Exercício 1.c

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1: Pessoa = {
    nome: "Maria",
    idade: 18,
    corFavorita: CorFavorita.VERDE

}

const pessoa2: Pessoa = {
    nome: "Ana",
    idade: 18,
    corFavorita: CorFavorita.VERMELHO

}

const pessoa3: Pessoa = {
    nome: "Angela",
    idade: 18,
    corFavorita: CorFavorita.VIOLETA

}

console.log(pessoa1, pessoa2, pessoa3)