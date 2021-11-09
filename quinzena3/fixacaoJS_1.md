```javascript
//Atividade 1
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
  let recebidoComVendas = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
  let recebidoMensal = (recebidoComVendas + 2000)
  
  return recebidoMensal
  }

//Atividade 2
function calculaPrecoTotal(quantidade){
  let precoMaca
  if(quantidade < 12){
    precoMaca = quantidade * 1.30
  } else {
    precoMaca = quantidade * 1
  }
  return precoMaca
}
```