
/*
=== Exercícios de interpretação de código ===
=== Exercício 1 ===
function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))



=== a) O que vai ser impresso no console? 10 50
=== b) O que aconteceria se retirasse os dois console.log 
e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? Nada apareceria no console.
*/

/*
=== Exercício 2 === 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

=== a. Explique o que essa função faz e qual é sua utilidade. Essa função transforma todas as letras em mininúculas e verifica 
se a palavra "cenoura" está inclusa na frase.
=== b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura . true
     ii.  CENOURA é bom pra vista. true
     iii. Cenouras crescem na terra. true
*/

/*
=== Exercícios de escrita de código ===
=== Exercício 1 ===
=== a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/

function sobreMim() {
	console.log("Eu sou Jéssica, tenho 29 anos, moro em Natal, trabalho e estudo.")
}

sobreMim()

/*
=== b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), 
a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as 
informações da pessoa em uma só mensagem com o template:
*/

const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const cidade = prompt("Em que cidade você mora?")
const profissão = prompt ("Qual a sua profissão?")

function imprimirFrase(){
    console.log("Meu nome é " + nome + ", tenho " + idade + " anos," + "moro na cidade de " + cidade + " e sou " + profissão)
}

imprimirFrase()

/*
=== a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas 
e retorne o resultado. Invoque a função e imprima no console o resultado.
*/

function somaDoisNumeros(numero1, numero2){
    const soma = numero1 + numero2
    console.log(soma)
}

somaDoisNumeros(5, 40)

/*
=== b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
*/

function maiorOuIgual (numero1, numero2){
    const boolean = numero1 >= numero2
    console.log(boolean)
}

maiorOuIgual(30, 10)

/*
=== c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/

function numeroPar (numero1){
    const par = numero1 %2 === 0
    console.log(numeroPar)

numeroPar (33)

/*
d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela em letras maiúsculas.
*/

function tamanhoDaMensagem (mensagem){
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}

tamanhoDaMensagem("Hoje é quinta-feira")

/*
=== Exercício 3 ===

Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:
*/


function soma (numero1, numero2){
    const resultadoSoma = numero1 + numero2
    console.log(resultadoSoma)
}

function subtracao (numero1, numero2){
    const resultadoSubtracao = numero1 - numero2
    console.log(resultadoSubtracao)
}

function multiplicacao (numero1, numero2){
    const resultadoMultiplicacao = numero1 * numero2
    console.log(resultadoMultiplicacao)
}

function divisao (numero1, numero2){
    const resultadoDivisao = numero1/ numero2
    console.log(resultadoDivisao)
}

const numero1 = Number(prompt("Escolha um número"))
const numero2 = Number(prompt("Escolha outro número"))

soma(numero1, numero2)
subtracao(numero1, numero2)
multiplicacao(numero1, numero2)
divisao(numero1, numero2)




