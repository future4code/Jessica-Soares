/*
=== Exercícios de interpretação de código ===

=== Respostas === 

1.a O console vai imprimir o array completo, mostrando todos os seus elementos, além da posição que ocupam no array.

2.a O console vai retornar todos os valores da chave "nome" contidos no objeto "usuarios".

3.a O console vai retonar todos os valores do array, com exceção do que inclui "Chijo", inclusive o nome vinculado a ele.

=== Exercícios de escrita de código ===

=== Resposta exercício 1.a ===
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((item) => {
    return item.nome
 })
 
 console.log(nomePets)

/*
=== Resposta exercício 1.b ===
*/

const cachorrosSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
 })

 console.log(cachorrosSalsicha)

/*
=== Resposta exercício 1.c (não consegui finalizar)===
*/

// const cachorrosPoodle = pets.filter((item) => {
//     return item.raca === "Poodle"
// }).map((item) => {
//     return item.nome
// })

// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " + cachorrosPoodle)
/*Imprime os dois nomes de cachorro Poodle na mesma frase"*/

/*
=== Resposta exercício 2.a ===
*/
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const nomeProdutos = produtos.map((item) => {
    return item.nome
})

console.log(nomeProdutos)

/*
=== Resposta exercício 2.b (não consegui fazer) ===
*/



/*
=== Resposta exercício 2.c ===
*/

const categoriaBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })

console.log(categoriaBebidas)

/*
=== Resposta exercício 2.d (não consegui fazer) ===
*/

// const nomes = produtos.map((item) => {
//     return item.nome
// })
// const confereYpe = nomes.includes("Ypê")

// console.log(nomes)
// console.log(confereYpe)

/*
=== Resposta exercício 2.e (não consegui fazer) ===
*/
