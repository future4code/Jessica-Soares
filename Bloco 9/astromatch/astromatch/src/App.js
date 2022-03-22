import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "./constantes/index";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaMatching from "./components/TelaMatching/TelaMatching";
import { ChakraProvider, Button } from '@chakra-ui/react';


const App = () => {
  const [tela, setTela] = useState("inicial");

  const trocaTela = (tela) => {
    setTela(tela)
  }

  const renderizarTela = () => {
    switch(tela){
      case "inicial":
        return <TelaInicial trocaTela = {trocaTela}/>
      case "match":
        return <TelaMatching trocaTela = {trocaTela}/>
      default:
        return null
    }
  }

  const ApagarMatches = () => {
    axios
    .put(`${baseURL}/clear`)
    .then((response) => { 
        alert ('Lista de matches apagada!')
    })
    .catch((err) =>{
        console.log(err)
    })
}


  return (
    <div>
      {renderizarTela()}
      <ChakraProvider>
      <Button onClick={ApagarMatches} colorScheme='pink' variant='outline' left='75%' bottom='5%' position='absolute'>
        Apagar matches
      </Button>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
