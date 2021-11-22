import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'cláudia',
        fotoUsuario: 'https://picsum.photos/40/50',
        fotoPost: 'https://picsum.photos/190/150'
      },
      
      { 
      nomeUsuario: 'mayara',
      fotoUsuario: 'https://picsum.photos/30/50',
      fotoPost: 'https://picsum.photos/180/150'
      }
    ],
    
    valorInputNomeusuario: "",
    valorInputFotousuario: "",
    valorInputFotopost: ""

  };

  adicionaPost = () => {
    
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeusuario,
      fotoUsuario: this.state.valorInputFotousuario,
      fotoPost: this.state.valorInputFotopost
    };

    
    const outroPost = [...this.state.posts, novoPost];

    this.setState({ posts: outroPost });
  };

  onChangeInputNomeusuario = (event) => {
    this.setState({ valorInputNomeusuario: event.target.value });
  };

  onChangeInputFotousuario = (event) => {
    this.setState({ valorInputFotousuario: event.target.value });
  };

  onChangeInputFotopost = (event) => {
    this.setState({ valorInputFotopost: event.target.value });
  };

  render() {
    
    const listaDeComponentes = this.state.posts.map((pessoa) => {
      return (
        <Post
        nomeUsuario = {pessoa.nomeUsuario}
        fotoUsuario =  {pessoa.fotoUsuario}
        fotoPost = {pessoa.fotoPost}
        />
      );
    });      

return (
  <MainContainer>
    <FormContainer>
      <input
        value={this.state.valorInputNomeusuario}
        onChange={this.onChangeInputNomeusuario}
        placeholder={"Nome usuário"}
      />
      <input
        value={this.state.valorInputFotousuario}
        onChange={this.onChangeInputFotousuario}
        placeholder={"Foto usuário"}
      />

      <input
      value={this.state.valorInputFotopost}
      onChange={this.onChangeInputFotopost}
      placeholder={"Foto post"}
      />
      <button onClick={this.adicionaPost}> Adicionar post</button>
    </FormContainer>
    <div>{listaDeComponentes}</div>
  </MainContainer>
);
}
}

export default App;
