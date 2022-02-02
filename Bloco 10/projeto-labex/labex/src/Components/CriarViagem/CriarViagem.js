import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CriarViagemContainer = styled.div`
  margin: 150px;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr;

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
}
`

const CriarViagem = () => {
    const [form, setForm] = useState({nome:""})   
    
     const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const criarViagem = (event) => {
      event.preventDefault()
    };
    console.log(form)
    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", 
      form, 
      {
      headers:{

      }
    })
    .then(response => {

    });

        return (
            <CriarViagemContainer>
            <Titulo>Criar Viagem</Titulo>
            <form onSubmit={criarViagem}>
              <input
                name="nome"
                value={form.nome}
                onChange={onChange}
                placeholder={"Nome"}
                required
              />
            <button onClick={criarViagem}>Criar viagem</button>
            </form>
            <button>Home</button>
            </CriarViagemContainer>
        );
    };

    export default CriarViagem;