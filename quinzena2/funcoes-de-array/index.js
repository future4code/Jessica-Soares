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
=== Resposta exercício 1.c ===

=== Como havia feito (Imprime os dois nomes de cachorro Poodle na mesma frase, como string) ===
*/

const cachorrosPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
}).map((item) => {
    return item.nome
})

console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " + cachorrosPoodle)

/*
Ou assim:
*/

const cachorrosPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
})

const apenasNomes = cachorrosPoodle.map((item) => {
    return item.nome
})

console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " + apenasNomes)

/* 
=== Como deve ser (imprime array) === 
*/

const cachorrosPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
})

const apenasNomes = cachorrosPoodle.map((item) => {
    return console.log ("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome)
})

/*
Ou assim:
*/

const selecionarSoPoodles = pets.filter((item) => {
    return item.raca == "Poodle"
})

function imprimeMensagem(item){
    return "Você ganhou desconto para tosar o/a " + item.nome
   }

const mensagemDogsPoodle = selecionarSoPoodles.map(imprimeMensagem)

console.log(mensagemDogsPoodle)

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
=== Resposta exercício 2.b ===
*/

const produtosLista = produtos.map((item) => {
    return item.nome
})

const precoProdutosLista = produtos.map((item) => {
    return console.log(item.nome + " " + item.preco * 0.95)
})

/*
=== Resposta exercício 2.c ===
*/

const categoriaBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })

console.log(categoriaBebidas)

/*
=== Resposta exercício 2.d ===

=== Como havia feito (imprime "false") ===
*/

const nomes = produtos.map((item) => {
    return item.nome
})
const confereYpe = nomes.includes("Ypê")

console.log(confereYpe)

/*
=== Como deve ser ===
*/

const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(produtosYpe)

/*
=== Resposta exercício 2.e ===
*/
const produtosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

const precoProdutosYpe = produtosYpe.filter((item) => {
    return console.log("Compre " + item.nome + " por " + item.preco)
})