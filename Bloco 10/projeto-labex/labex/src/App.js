import React from "react";
import Home from "./Components/Home/Home";
import ListaDeViagens from "./Components/ListaDeViagens/ListaDeViagens";
import Login from "./Components/Login/Login";
import AdminHome from "./Components/AdminHome/AdminHome";
import CriarViagem from "./Components/CriarViagem/CriarViagem";

export default class App extends React.Component {
  state = {
    telaAtual: "home"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "home":
        return <Home irParaLista={this.irParaLista} irParaLogin={this.irParaLogin}/>
      case "login":
        return <Login irParaHome={this.irParaHome} irParaAdminHome={this.irParaAdminHome}/>
      case "lista":
        return <ListaDeViagens irParaHome={this.irParaHome} irParaLogin={this.irParaLogin}/>
      case "adminHome":
        return <AdminHome irParaHome={this.irParaHome} irParaCriarViagem={this.irParaCriarViagem} irParaLogin={this.irParaLogin}/>
      case "criarViagem":
        return <CriarViagem irParaAdminHome={this.irParaAdminHome}/>
      default:
        return <div>Erro. Página não encontrada!</div>
    }
  }

  irParaHome = () => {
    this.setState({telaAtual: "home"})
  }

  irParaLogin = () => {
    this.setState({telaAtual: "login"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  irParaAdminHome = () => {
    this.setState({telaAtual: "adminHome"})
  }

  irParaCriarViagem = () => {
    this.setState({telaAtual: "criarViagem"})
  } 

  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}


