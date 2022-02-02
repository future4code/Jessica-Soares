import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "Jessica-Soares-Joy"
  }
};

class DetalhesUsuario extends React.Component {
  state = {
    detalheUsuario: {},
    editarUsuario: "botaoEditar",
    nome: "",
    email: ""
  };

  componentDidMount() {
    this.getDetalheUsuario();
  }

  getDetalheUsuario = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ detalheUsuario: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changeeditarUsuarioFiel = () => {
    if (this.state.editarUsuario === "botaoEditar") {
      this.setState({ editarUsuario: "userEditForm" });
    } else {
      this.setState({ editarUsuario: "botaoEditar" });
    }
  };

  mudarNome = event => {
    const novoNomeValue = event.target.value;

    this.setState({ nome: novoNomeValue });
  };

  mudarEmail = event => {
    const novoEmailValue = event.target.value;

    this.setState({ email: novoEmailValue });
  };

  mudarUsuario = () => {
    const body = {
      nome: this.state.nome,
      email: this.state.email
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ nome: "", email: "" });
        this.getDetalheUsuario();
        this.changeeditarUsuarioFiel();
        alert(`Usuário ${this.state.nome} editado com sucesso!`);
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    const editarUsuario =
      this.state.editarUsuario === "botaoEditar" ? (
        <button onClick={this.changeeditarUsuarioFiel}>Editar usuário</button>
      ) : (
        <div>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.nome}
            onChange={this.mudarNome}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.mudarEmail}
          />
          <button onClick={this.mudarUsuario}>Salvar edição</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.detalheUsuario.nome}</p>
          <p>{this.state.detalheUsuario.email}</p>
        </div>
        <div>{editarUsuario}</div>
        <hr />
        <button onClick={this.props.changePage}>
          Voltar para lista de usuários
        </button>
      </div>
    );
  }
}

export default DetalhesUsuario;
