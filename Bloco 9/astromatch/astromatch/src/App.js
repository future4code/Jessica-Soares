import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "./constantes/index";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaMatching from "./components/TelaMatching/TelaMatching";


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
      <div><button onClick={ApagarMatches}>Apagar Matches</button></div>
    </div>
  );
}

export default App;
