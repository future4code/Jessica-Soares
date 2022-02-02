import React from "react";
import CriarUsuario from './Components/CriarUsuario/CriarUsuario';
import ListaUsuarios from './Components/ListaUsuarios/ListaUsuarios';

export default class App extends React.Component {
  state = {
    currentPage: "cadastro"
  };

  changePage = () => {
    if (this.state.currentPage === "cadastro") {
      this.setState({ currentPage: "criarUsuario" });
    } else {
      this.setState({ currentPage: "cadastro" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.currentPage === "cadastro" ? <CriarUsuario /> : <ListaUsuarios />}
      </div>
    );
  }
}
