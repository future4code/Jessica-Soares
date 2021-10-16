// EXERCÍCIO 01
function inverteArray(array) {

  var arrayInvertido = []

  for(let i = array.length- 1; i >= 0; i-- ) { 
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let numerosParesElevadosADois = []

  for(let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
  
      numerosParesElevadosADois.push(array[i] ** 2)
    }
  }
  return numerosParesElevadosADois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let numerosPares = []

  for(let i = 0; i < array.length; i ++){
    if(array[i] % 2 === 0){

      numerosPares.push(array[i])
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maiorNumero = 0

  for(let i = 0; i < array.length; i++){
    const numeroDaVez = array[i]
    if(numeroDaVez > maiorNumero){
      maiorNumero = numeroDaVez
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
  const quantidadeElementos = array.length
  
  return quantidadeElementos
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
 
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  let primeirosNumerosPares = []

  for (let i = 0; primeirosNumerosPares.length < n; i ++){
    if(i % 2 === 0){

      primeirosNumerosPares.push[i]
    }
  }
  return primeirosNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  
  if(a === b && b === c){
    return 'Equilátero'
  }

  if(a === b && b !== c || a === c && c !== b || b === c && c !== a){
    return 'Isósceles'
  }
 
  if(a !== b && b !== c){
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor
  
  if(num1 > num2){
    maiorNumero = num1
    menorNumero = num2
  }else{
    maiorNumero = num2
    menorNumero = num1
  }

  if(maiorNumero % menorNumero === 0){
    maiorDivisivelPorMenor = true
  }else{
    maiorDivisivelPorMenor = false
  }

  let diferenca = maiorNumero - menorNumero
   
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novoArray = []
  
  array.sort((a, b) => a - b)
  
  let segundoMaior = array[array.length - 2]
  let segundoMenor = array[1]

  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  
  array.sort((a, b) => a - b)
  
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  return  {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
}

// EXERCÍCIO 13
function imprimeChamada() {
    let filme =  {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
    return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return pessoaAnonima

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
