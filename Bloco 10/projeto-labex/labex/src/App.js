import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const AppContainer = styled.div`
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
`

const Button = styled.button`
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
`
    


const App = () => {
  return (
    <AppContainer>
      <Titulo>LabeX</Titulo>
      <Buttons>
      <Button>Viagens</Button>
      <Button>Log in</Button>
      </Buttons>
    </AppContainer>
  );
}

export default App;
