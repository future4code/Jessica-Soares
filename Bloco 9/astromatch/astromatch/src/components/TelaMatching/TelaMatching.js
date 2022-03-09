import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { baseURL } from "../../constantes/index";

const MainContainer = styled.div`
display: grid;
margin: auto;
border: 2px solid black;
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

const MatchesContainer = styled.div`
overflow-y: scroll;
`

const ListaMatches = styled.div`
margin: 20px;
display: flex;
align-items: center;

:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

img {
  border-radius: 50%;
  margin-right: 8px;
  height: 40px;
  width: 40px;
}
`

function TelaMatching(props) {

  const [matches, setMatches] = useState([])

  const pegaMatches = () => {
    axios
      .get(`${baseURL}/matches`)
      .then((response) => {
        console.log(response.matches)
        setMatches(response.data.matches)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    pegaMatches()
  },[])

  return (
    <MainContainer>
    <Barra>
      <button onClick={() => props.trocaTela('inicial')}>Tela Inicial</button>
      <h1>Deu Match</h1>
    </Barra>
    <MatchesContainer>
    {matches.map((item) => {
                return (
                    <ListaMatches>
                        <img  src={item.photo}/>
                         {item.name}
                    </ListaMatches>
                )
            })}
    </MatchesContainer>
    </MainContainer>
  );
}

export default TelaMatching;