/*
=== Exercícios de interpretação de código ===

=== Respostas ===

1.a O console vai imprimir: Matheus Nachtergaele, Virginia Cavendish e canal: "Globo", horario: "14h"

2.a O console vai imprimir: nome: "Juca", idade: 3, raca: "SRD"
                            nome: "Juba", idade: 3, raca: "SRD"
                            nome: "Jubo", idade: 3, raca: "SRD"

2.b A sintaxe dos 3 pontos repete o que está no objeto mencionado.

3.a O console vai imprimir: false e undefined

3.b O "false" retorna porque esse é o valor da chave que foi solicitada no exercício. Já no caso do undefined, ocorre porque a chave 
solicitada não existe/foi definida.
*/

/*
=== Exercícios de escrita de código ===
=== Atividades 1.a e 1.b ===
*/

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
   
 }

 function objetoPessoa(pessoa){
   
 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e também de ${pessoa.apelidos[2]}.`)
 return pessoa
}

objetoPessoa(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos: ["Manda", "Dinha", "Dadá"]
}
objetoPessoa(pessoa2)

/*
=== Atividades 2.a e 2.b ===
*/

const pessoa1 = {
    nome: "Fátima",
    idade: 31,
    profissão: "Arquiteta"
}

const pessoa2 = {
    nome: "Débora",
    idade: 34,
    profissão: "Dentista"
}

function objetoPessoas(pessoa1, pessoa2){
    array = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length, 
        pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissão, pessoa2.profissão.length]
    console.log(array)
   return (pessoa1, pessoa2)
}
 
objetoPessoas(pessoa1, pessoa2)

/*
=== Atividades 3.a, 3.b, 3.c, 3.d ===
*/

const carrinho = []

const fruta1 = {
    nome: "maçã",
    disponibilidade: true
}

const fruta2 = {
    nome: "laranja",
    disponibilidade: true
}

const fruta3 = {
    nome: "melão",
    disponibilidade: true
}
/*
Como havia feito:

function objetoFruta(fruta1, fruta2, fruta3){
    carrinho.push(fruta1, fruta2, fruta3)
}

objetoFruta(fruta1, fruta2, fruta3)

console.log(carrinho)

Forma melhor/mais correta:
*/

function objetoFruta(fruta){
    carrinho.push(fruta)
}

objetoFruta(fruta1)
objetoFruta(fruta2)
objetoFruta(fruta3)

console.log(carrinho)





    


