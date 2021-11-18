
/*
===Exercícios de interpretação de código===
Respostas exercício 1:
a. false
b. false
c. true
d. boolean
*/

/*
Resposta exercício 2 e 3:

O problema é que o computador está interpretando o número como string, isso acontece porque faltou escrever "Number" 
na linha de código do prompt, assim, em vez de retornar a soma dos números, o console vai apenas escrever um número após o outro. 

Está assim:
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

Mas o correto seria:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/


//===Exercícios de escrita de código===

//===Exercício 1===

let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

maiorIdade = suaIdade > idadeAmigo

console.log ("A sua idade é maior que a do seu melhor amigo?", maiorIdade)

//===Exercício 2===

let numeroPar = Number(prompt("Escreva um número par"))
console.log (numeroPar %2)

//O console sempre retorna o número "0".
//Se pedirmos um número ímpar, o resultado será "1".

//===Exercício 3===
let idade = Number(prompt("Qual a sua idade?"))

idadeMeses = idade * 12
console.log (idadeMeses)

idadeDias = idadeMeses * 365
console.log (idadeDias)

idadeHoras = idadeDias * 24
console.log (idadeHoras)

//===Exercício 4===

let primeiroNumero = Number(prompt("Escolha um número."))
let segundoNumero = Number(prompt("Escolha outro número."))

pergunta1 = primeiroNumero > segundoNumero
pergunta2 = primeiroNumero === segundoNumero
pergunta3 = (primeiroNumero %segundoNumero) === 0
pergunta4 = (segundoNumero %primeiroNumero) === 0

console.log ("O primeiro numero é maior que segundo?", pergunta1)
console.log ("O primeiro numero é igual ao segundo?", pergunta2) 
console.log ("O primeiro numero é divisível pelo segundo?", pergunta3)
console.log ("O segundo numero é divisível pelo primeiro?", pergunta4)