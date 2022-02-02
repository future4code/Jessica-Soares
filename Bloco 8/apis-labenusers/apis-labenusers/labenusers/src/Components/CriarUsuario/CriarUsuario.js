import axios from 'axios';
import React from 'react';

class CriarUsuario extends React.Component {
  state = {
    nome: "",
    email: ""
  };

  mudaInputNome = event => {
    const novoNome = event.target.value;

    this.setState({ nome: novoNome });
  };

  mudaInputEmail = event => {
    const novoEmail = event.target.value

    this.setState({ email: novoEmail });
  };


  createUser = () => {

    const axiosConfig = {
      headers: {
        Authorization: "Jessica-Soares-Joy"
      }
    };

    const body = {
      name: this.state.nome,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.nome} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch((error) => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  
  render(){
    return(
      <div>
        <h1>Labenusers</h1>
        <input
        placeholder='Nome'
        value={this.state.nome}
        onChange={this.mudaInputNome}
        />
      
        <input
        placeholder='Email'
        value={this.state.email}
        onChange={this.mudaInputEmail}
        />
        <button onClick={this.createUser}>Criar usuário</button>
      </div>
    );
  }
}

export default CriarUsuario;