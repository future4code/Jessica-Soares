/*
=== Exercícios de interpretação de código ===

=== Respostas === 

1 O console retorna o número "10".

2.a O console vai imprimir "19, 21, 23, 25, 27, 30".

2.b O for...of... naõ é suficiente. Pode ser feito da seguinte forma:

=== Como eu fiz ===
*/

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let i = 0; i < lista.length; i++) {
    let numeroLista = lista[i];
    let posicaoArray = [i];
    console.log(numeroLista, "índice", posicaoArray);
}

/*
=== Como sugerido ===
*/

let indice = 0;
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {

  if (numero > 18) {
		console.log(numero, "indice", indice);
	}

  indice++;
} 

/*
3 O console vai acrescentar 1 asterico por vez, até imprimir 4 astericos na última linha.
*/

/*
=== Exercícios de escrita de código ===

=== Resposta exercícios 1.a, 1.b, 1.c ===

=== Como eu fiz ===
*/

let numeroAnimais = Number(prompt("Quantos animais de estimação você tem?"));

if (numeroAnimais === 0){
    console.log("Que pena, mas você pode adotar um!");

}else if (numeroAnimais > 0){
    let nomesAnimais = [];
    for(let i = 0; i < numeroAnimais; i++){
    let animais = prompt("Diga o nome dos seus animais, um de cada vez.");
    nomesAnimais[i] = animais;
    }

    console.log(nomesAnimais);
}

// /*
// === Como sugerido ===
// */

let numeroAnimais = Number(prompt("Quantos animais de estimação você tem?"))

if (numeroAnimais === 0){
    console.log("Que pena, mas você pode adotar um!")
}

if(numeroAnimais > 0){
      let arrayAnimais = []
      for(let i = 0; i < numeroAnimais; i++){
    
        arrayAnimais.push(prompt("Diga o nome do seu bichinho"))
      }
      console.log(arrayAnimais)
    }

/*
=== Respostas exercício 2 ===

=== Resposta exercício 2.a ===
*/

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimirValorDoArrayOriginal (arrayOriginal) {
      for(let valor of arrayOriginal){
        console.log(valor)
      }
}

imprimirValorDoArrayOriginal(arrayOriginal)

/*
=== Resposta exercício 2.b ===
*/

function imprimirValorDoArrayOriginal (arrayOriginal) {
  for(let valor of arrayOriginal){
    console.log(valor/10)
  }
}

imprimirValorDoArrayOriginal(arrayOriginal)

/*
=== Resposta exercício 2.c ===
*/

function imprimirValoresPares (arrayOriginal) {
      let arrayNumerosPares = []
      for(let valor of arrayOriginal){
        if(valor % 2 === 0){
          arrayNumerosPares.push(valor)
        } 
    }
  console.log(arrayNumerosPares)
}

imprimirValoresPares(arrayOriginal)

/*
=== Resposta exercício 2.d ===
*/

function imprimirArrayDeStrings (arrayOriginal){
  let arrayDeStrings = []
  let i = 0
  for(let valor of arrayOriginal){
    arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
    i++
  }
  console.log(arrayDeStrings)
}

imprimirArrayDeStrings (arrayOriginal)

/*
=== Resposta exercício 2.e ===
*/

function pegarMaiorOuMenorNumero (arrayOriginal){
  let maiorNumero = 0;
  let menorNumero = Infinity;
  for(let i = 0; i < arrayOriginal.length; i++){
    
    if(arrayOriginal[i] < menorNumero){
      menorNumero = arrayOriginal[i]
    }else if(arrayOriginal[i] > maiorNumero){
      maiorNumero = arrayOriginal[i]
    }
  }
  console.log("O maior numero é:", maiorNumero)
  console.log("O menor numero é:", menorNumero)
}

pegarMaiorOuMenorNumero (arrayOriginal)




