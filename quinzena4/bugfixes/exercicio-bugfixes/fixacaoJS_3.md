```javascript
function calculaNota(ex, p1, p2) {
  let resultado
  mediaPonderada = (ex*1 + p1*2 + p2*3)/6
  if(mediaPonderada >= 9){
    resultado = "A"
  }else if(mediaPonderada < 9 && mediaPonderada >= 7.5){
    resultado = "B" 
  }else if(mediaPonderada < 7.5 && mediaPonderada >= 6){
    resultado = "C" 
  }else{
    resultado = "D"
  }
  return resultado
}
```