// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
   
  const altura = prompt("Crie uma altura para um retângulo")
  const largura = prompt("Crie uma largura para um retângulo")

  const areaRetangulo = altura * largura

  console.log(areaRetangulo)
}


// Exercício 2
function imprimeIdade() {
  
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em que ano você nasceu?")

  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// Exercício 3
function calculaIMC() {
  const peso = prompt("Qual o seu peso em kg?")
  const altura = prompt("Qual a sua altura em metros?")

  const IMC = peso / (altura * altura)

  console.log(IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5

function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt("Diga sua cor favorita.")
  const corFavorita2 = prompt("Diga outra cor que você gosta.")
  const corFavorita3 = prompt("Diga uma terceira cor favorita.")

  const coresFavoritas = [corFavorita1, corFavorita2, corFavorita3]

  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const nomeCompleto = prompt("Diga seu nome completo.")
  console.log (nomeCompleto.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt("Qual o custo total do espetáculo")
  const valorIngresso = prompt("Qual o valor do ingresso?")
  const quantidadeIngressos = custoEspetaculo / valorIngresso

  console.log(quantidadeIngressos)
  
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const nome = prompt("Qual o seu nome?")
  const nomeAmigo = prompt("Diga o nome de um amigo.")

  const tamanhoNomes = (nome.length) === (nomeAmigo.length)

  console.log(tamanhoNomes)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const profissaoSonhos = prompt("Qual a profissão dos seus sonhos?")
  const profissaoAtual = prompt("Qual sua profissão atual?")

  const profissaoSonhosMaiuscula = profissaoSonhos.toLowerCase()
  const profissaoAtualMaiuscula = profissaoAtual.toLowerCase()

  const comparacao = profissaoSonhosMaiuscula === profissaoAtualMaiuscula

  console.log(comparacao)

}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Qual seu ano de nascimento?")
  const anoEmissaoRG = prompt("Em que ano seu RG foi emitido?")

  const idade = anoAtual - anoNascimento
  const anoRG = anoAtual - anoEmissaoRG
  
  const renovacaoAte20Anos = idade <= 20 && anoRG >= 5
  const renovacaoAte50Anos = idade > 20 && idade <= 50 && anoRG >= 10
  const renovacaoMaior50Anos = idade > 50 && anoRG >= 15

  console.log(renovacaoAte20Anos || renovacaoAte50Anos || renovacaoMaior50Anos)

}

// Exercício 11
function checaAnoBissexto() {
  const ano = prompt("Escolha um ano.")

  const condicaoBissexto1 = ano %400 === 0
  const condicaoBissexto2 = ano %4 === 0 && ano %100 === 0 && ano  %400 === 0
  const condicaoBissexto3 = ano %4 === 0 && ano %100 !==0

  console.log(condicaoBissexto1 || condicaoBissexto2 || condicaoBissexto3)
   
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Responda com sim ou não. Você tem mais de 18 anos?")
  const escolaridade = prompt("Responda com sim ou não. Você possui ensino médio completo?")
  const horario = prompt("Responda com sim ou não. Você possui disponibilidade exclusiva durante os horários do curso?")
  
  const condicao1 = idade.toLowerCase() === "sim"
  const condicao2 = escolaridade.toLowerCase() === "sim"
  const condicao3 = horario.toLowerCase() === "sim"


  console.log(condicao1 && condicao2 && condicao3)                                   
 
}