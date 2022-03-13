import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL} from "../../constantes/index";
import styled from "styled-components";
import Like from "../../imagens/like.jpg";
import Dislike from "../../imagens/dislike.png";
import { ChakraProvider, Spinner } from '@chakra-ui/react';


const ImagemContainer = styled.div`
height: 400px;
width: 400px;
position: center;
position: relative;
margin: auto;
`

const Imagem = styled.img`
height: 100%;
width: 100%;
border: none;
border-radius: 5px;
box-shadow: 0 0 1px grey;
object-fit: contain;
position: absolute;
z-index: 1;
`

const ImagemBackground = styled.img`
filter: blur(20px);
position: relative;
border: 1px solid grey;
height: 100%;
width: 100%;
`

const Nome = styled.text`
font-size: 20px;
font-weight: bold;
position: absolute;
left: 20px;
top: 310px;
color: white;
z-index: 2;
`

const Descricao = styled.text`
font-size: 15px;
position: absolute;
left: 20px;
top: 350px;
color: white;
z-index: 2;
`

const BotaoContainer = styled.text`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 90px 0px 90px;


button {
  height: 25px;
}

img {
  height: 40px;
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
    <ChakraProvider>
    <div>
      {pessoa ? (
        <>
    <ImagemContainer>
    <Imagem src={pessoa.photo} alt="Foto"/>
    <ImagemBackground src={pessoa.photo}/>
    <Nome>{pessoa.name}, {pessoa.age}</Nome>
    <Descricao>{pessoa.bio}</Descricao>
    </ImagemContainer>

    <BotaoContainer>
        <button onClick={like}><img src={Like} height='5px'/></button>
        <button onClick={dislike}><img src={Dislike} height='5px'/></button>
    </BotaoContainer>
    </>
      ):(
      <Spinner color='pink' size='xl' left='45%' position='relative'/>
    )}
    </div>
    </ChakraProvider>
  );
}

export default Card;