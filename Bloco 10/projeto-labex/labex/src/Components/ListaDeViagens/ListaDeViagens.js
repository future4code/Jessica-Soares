import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ListaDeViagensContainer = styled.div`
  margin: 150px;
`

const Titulo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 60px;
`
  
const Buttons = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;


button {
  background-color: #708090;
  border: black;
  color: white;
  padding: 5px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  width: 150px;
  border-radius: 10px;
  :hover {
    background-color: #708099;
    color:black;
  }
}
`

export default class ListaDeViagens extends React.Component {
  render(){
    return (
      <ListaDeViagensContainer>
        <Buttons>
        <button onClick={this.props.irParaHome}>Home</button>
        <button onClick={this.props.irParaLogin}>Login</button>
        </Buttons>
        <Titulo>Lista de viagens</Titulo>
      </ListaDeViagensContainer>
    );
  }
}