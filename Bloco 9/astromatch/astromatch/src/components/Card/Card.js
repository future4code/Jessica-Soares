import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL} from "../../constantes/index";
import styled from "styled-components";

const ImagemContainer = styled.div`
height: 350px;
width: 250px;
position: center;
margin: auto;
display: block;
`

const Imagem = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
box-shadow: 0px 0px 5px 5px grey; 
`

const Nome = styled.div`
font-sixe: 20px;
font-weight: bold;
margin: 15px 15px;
`

const Descricao = styled.div`
margin-left: 15px;
`

const BotaoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 70px 0px 70px;


button {
  height: 25px;
}
`

function Card() {
  const [pessoa, setPessoa] = useState({})

  const pegaPerfil = () => {
    axios
      .get(`${baseURL}/person`)
      .then((response) => {
        console.log(response.data)
        setPessoa(response.data.profile)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    pegaPerfil()
  },[])

  const escolhePessoa = (choice) => {
    const body = {
      id: pessoa.id,
      choice: choice
    }
    axios
    .post(`${baseURL}/choose-person`, body)
    .then((response) => {
      console.log(response.data)
      pegaPerfil()
    })
    .catch((error) => {
      console.log(error)
    })
}

const like = () => {
  escolhePessoa(true)
}

const dislike = () => {
  escolhePessoa(false)
}


  return (
    <div>
      {pessoa ? (
        <>
    <ImagemContainer>
    <Imagem src={pessoa.photo} alt="Foto"/>
    </ImagemContainer>

    <Nome>{pessoa.name}, {pessoa.age}</Nome>
    <Descricao>{pessoa.bio}</Descricao>

    <BotaoContainer>
        <button onClick={like}>Curti</button>
        <button onClick={dislike}>Não curti</button>
    </BotaoContainer>
    </>
      ):(
        <p>Carregando...</p>
    )}
    </div>
  );
}

export default Card;