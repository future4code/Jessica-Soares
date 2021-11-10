
console.log ("Boas vindas ao jogo de Blackjack!")

const confirmarInicioJogo = confirm("Quer iniciar uma nova rodada?")

if (confirmarInicioJogo === true){

      const cartaUmUsuario = comprarCarta()
      
      const textoUmUsuario = (cartaUmUsuario.texto)
      const valorUmUsuario = (cartaUmUsuario.valor)
   
      const cartaDoisUsuario = comprarCarta()

      const textoDoisUsuario = (cartaDoisUsuario.texto)
      const valorDoisUsuario = (cartaDoisUsuario.valor)


      const cartaUmComputador = comprarCarta()

      const textoUmComputador = (cartaUmComputador.texto)
      const valorUmComputador = (cartaUmComputador.valor)

      const cartaDoisComputador = comprarCarta()

      const textoDoisComputador = (cartaDoisComputador.texto)
      const valorDoisComputador = (cartaDoisComputador.valor)


      const somaValorUsuario = Number(valorUmUsuario) + Number(valorDoisUsuario)
      const somaValorComputador = Number(valorUmComputador) + Number(valorDoisComputador)
      

      console.log("Usuário - cartas: " + textoUmUsuario + " " + textoDoisUsuario + "- pontuação: " + somaValorUsuario)
      console.log("Computador - cartas: " + textoUmComputador + " " + textoDoisComputador + "- pontuação: " + somaValorComputador)


      if(somaValorUsuario === somaValorComputador){
         console.log("Empate!")
      }else if (somaValorUsuario > somaValorComputador){
         console.log("O usuário ganhou!")
      }
      else{
         console.log("O computador ganhou!")
      }


}else{
   console.log("O jogo acabou!")
}

