/*
=== Exercícios de interpretação de código ===

=== Resposta exercícios 1.a, 1.b, 1c === 

O código testa se um número é par/divisível por 2, se for, ele imprime "Passou no teste.", 
caso contrário: "Não passou no teste."

=== Resposta exercício 2 ===

2.a O código serve para mostrar o preço de determinadas frutas. 

2.b Se o valor da fruta for maçã, o código imprime a mensagem: 
"O preço da fruta Maçã é R$ 2.25".

2.c Se o break em questão for retirado, o preço da pêra que o código retorna é R$ 5.

=== Resposta exercício 3 ===

3.a A primeira linha está pedindo para o usuário escolher um número, que será uma variável do tipo number.

3.b Se o usuário digitar "10", o console retorna "Esse número passou no teste". Se digitar "-10", retorna mensagem de erro.

3.c A mensagem de erro acontece porque a variável "mensagem" deveria estar dentro do bloco "else" e entre chaves.

=== Exercícios de escrita de código ===
=== Resposta exercícios 1.a, 1.b, 1.c ===
*/

const idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18){
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

/*
=== Resposta exercício 2 ===
*/

const horarioAula = prompt("Em que turno do dia você tem aula? Digite M para matutino, V para vespertino e N para noturno")

if(horarioAula === "M"){
    console.log("Bom dia!")

} else if (horarioAula === "V"){
    console.log("Boa tarde!")

} else if (horarioAula === "N"){
    console.log("Boa noite!")
}

/*
=== Resposta exercício 3 ===
*/

const horarioAula = prompt("Em que turno do dia você tem aula? Digite M para matutino, V para vespertino e N para noturno")

switch(horarioAula){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
    default:
        console.log("Resposta inválida")
        break
}   
/*
=== Resposta exercício 4 ===
*/
const generoFilme = prompt("O filme que você pretende assistir é do gênero fantasia? Responda com SIM ou NÃO.")
const precoFilme = prompt("O filme que você pretende assistir custa menos que R$ 15,00? Responda com SIM ou NÃO.")

if (generoFilme === "SIM" && precoFilme === "SIM"){
    console.log("Bom filme!")
} else {
    console.log("Por favor, escolha outro filme.")
}

/*
=== Outra forma de fazer (condicionando a segunda pergunta à primeira) ===
*/

const generoFilme = prompt("O filme que você pretende assistir é do gênero fantasia? Responda com SIM ou NÃO.")

if (generoFilme === "NÃO"){
    console.log("Por favor, escolha outro filme.")

} else if (generoFilme === "SIM") {
    const precoFilme = prompt("O filme que você pretende assistir custa menos que R$ 15,00? Responda com SIM ou NÃO.")
       if (precoFilme === "NÃO"){
            console.log("Por favor, escolha outro filme.")
        } else if (precoFilme === "SIM") {
            console.log("Bom filme!")
        }
    }















