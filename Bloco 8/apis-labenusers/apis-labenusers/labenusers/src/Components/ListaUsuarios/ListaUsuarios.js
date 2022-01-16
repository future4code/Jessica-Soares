import React from "react";
import styled from "styled-components";
import axios from "axios";
import DetalhesUsuario from '../DetalhesUsuario/DetalhesUsuario';

const BotaoDeletar = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "Jessica-Soares-Joy"
  }
};

class Users extends React.Component {
  state = {
    listaUsuarios: [],
    currentPage: "listaUsuarios",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.buscarListaUsuarios();
  }

  buscarListaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ listaUsuarios: response.data });
      });
  };

  deletarUsuario = userId => {
    if (window.confirm ("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.buscarListaUsuarios();
        })
        .catch(e => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };

  mudarPagina = userId => {
    if (this.state.currentPage === "listaUsuarios") {
      this.setState({ currentPage: "DetalheUsuario", userId: userId });
    } else {
      this.setState({ currentPage: "listaUsuarios", userId: "" });
    }
  };

  mudarNome = event => {
    const novoNomeValue = event.target.value;

    this.setState({ name: novoNomeValue });
  };

  buscarUsuario = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${
          this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ listaUsuarios: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "listaUsuarios" ? (
          <div>
            <ul>
              {this.state.listaUsuarios.length === 0 && <div>Carregando...</div>}
              {this.state.listaUsuarios.map(user => {
                return (
                  <li>
                    <span onClick={() => this.mudarPagina(user.id)}>
                      {user.name}
                    </span>
                    <BotaoDeletar
                      onClick={() => this.deletarUsuario(user.id)}
                    >
                      X
                    </BotaoDeletar>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.mudarNome}
            />
            <button onClick={this.buscarUsuario}>Salvar edição</button>
          </div>
        ) : (
          <DetalhesUsuario userId={this.state.userId} mudarPagina={this.mudarPagina} />
        )}
      </div>
    );
  }
}

export default Users;
