import React from "react";
import styled from "styled-components";

const ContainerMaior = styled.div`
border: 1px solid black;
height: 100vh;
width: 500px;
box-sizing: border-box;
margin: auto;
display: flex;
flex-direction: column;
`

const ContainerMensagem = styled.div`
flex-grow: 1;
padding: 16px;
display: flex;
flex-direction: column-reverse;
`

const ContainerInputs = styled.div`
display: flex;
`

const InputNome = styled.input`
width: 100px;
`

const InputMensagem = styled.input`
flex-grow: 1;
`


class App extends React.Component{

  state = {
    mensagens: [],
    valorUsuario: "",
    valorTexto: "",
  }

  onChangeValorUsario = (evento) => {
    this.setState({valorUsuario: evento.target.value})
  }

  onChangeValorTexto = (evento) => {
    this.setState({valorTexto: evento.target.value})
  }

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorUsuario,
      texto: this.state.valorTexto
    }

    const novoArrayMensagem = [novaMensagem, ...this.state.mensagens]

    this.setState({mensagens: novoArrayMensagem, valorTexto: ""})
  }

  render(){
    
    return(
      <ContainerMaior>
      <ContainerMensagem>
        {this.state.mensagens.map((mensagem, index) => {
          return <p key = {index}>
            <strong>{mensagem.usuario}</strong>: {mensagem.texto}
          </p>
        })}

      </ContainerMensagem>
      <ContainerInputs>
      <InputNome onChange = {this.onChangeValorUsario} value = {this.state.valorUsuario} placeholder = {"Nome"}/>
      <InputMensagem onChange = {this.onChangeValorTexto} value = {this.state.valorTexto} placeholder = {"Mensagem"}/>
      <button onClick={this.enviarMensagem}>Enviar</button>
      </ContainerInputs>
      </ContainerMaior>
    );
  }
}

export default App;
