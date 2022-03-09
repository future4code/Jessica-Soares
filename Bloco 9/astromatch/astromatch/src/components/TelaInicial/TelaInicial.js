import React from "react";
import styled from 'styled-components';
import Card from "../Card/Card";

const MainContainer = styled.div`
display: grid;
margin: auto;
border: 2px solid grey;
height: 600px;
width: 450px;
`

const Barra = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
border-bottom: 1px solid grey;
height: 60px;

button {
  height: 25px;
}

h1 {
  font-size: 45px;
  color: #FF69B4;
}
`

function TelaInicial(props) {
  return (
    <MainContainer>
    <Barra>
      <h1>Astromatch</h1>
      <button onClick={() => props.trocaTela("match")}>Lista</button>
    </Barra>
    <Card />
    </MainContainer>
  );
}

export default TelaInicial;