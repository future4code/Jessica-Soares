```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const arrayFinal = arrayDeNumeros.filter(item => { 
    if (item === numeroEscolhido) {
      return item
    } 
  })

  const repeticaoNumero = arrayFinal.length
    if (repeticaoNumero !== 0) {
      return(`O número ${numeroEscolhido} aparece ${repeticaoNumero}x`) 
    } else { 
      return("Número não encontrado") 
      }
}
```