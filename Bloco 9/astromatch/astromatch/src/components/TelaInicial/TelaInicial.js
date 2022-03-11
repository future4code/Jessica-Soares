import React from "react";
import styled from 'styled-components';
import Card from "../Card/Card";
import { ChakraProvider, Button } from '@chakra-ui/react';


const MainContainer = styled.div`
display: grid;
margin: auto;
margin-top: 10px;
border: 2px solid grey;
height: 580px;
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
  background: -webkit-linear-gradient(left, #FF69B4 60%, #abd7a8 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

function TelaInicial(props) {
  return (
    <MainContainer>
    <Barra>
      <h1>Astromatch</h1>
      <ChakraProvider>
      <Button onClick={() => props.trocaTela("match")} colorScheme='pink' variant='solid'>
        Lista
      </Button>
      </ChakraProvider>
    </Barra>
    <Card />
    </MainContainer>
  );
}

export default TelaInicial;