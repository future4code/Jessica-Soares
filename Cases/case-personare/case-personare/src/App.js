import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'


const Background = styled.div`
background-color:thistle;
`

const Header = styled.div`
heigth: 30px;
background-color: pink;
`

const Titulo = styled.text`
display: flex;
align-items: center;
flex-direction: column;


button {
  height: 35px;
  width: 100px;
  margin-bottom: 10px;
}
`

const ContainerPrincipal = styled.div`
display: flex;
width: 100vw;
flex-wrap: wrap;
margin-left: 20px;
margin-top: 20px;
align-content: space-between;
gap: 2px;
`

const Carta = styled.image`
height: 100px;
`


const Tarot = () => {

    const [data, setData] = useState(undefined)
    const [carta, setCarta] = useState(true)
    const [cartas, setCartas] = useState([])
   

    const getData = () => {
        axios
            .get("tarot.json")
            .then((response) => {
                setData(response.data);
                setCartas(response.data.cards)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData()
    }, []);
  

    const embaralharCartas = () => {
      for (let i = cartas.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
      }
      setCartas(cartas)
  }

  const virarCartas = () => {
    setCarta(!carta)
    embaralharCartas()
}


  const mostrarCartas = cartas && cartas.map((carta) => {
      return (
          <div>
              <Carta>
                  <img src={carta ? `${data.imagesUrl}${carta.image}` : data.imageBackCard } />
              </Carta>
          </div>
      )
  })


    return (
        <div>
          <Background>
            <Header>
            <Titulo>
            <h1>Jogo de Tarot</h1>
            <h>Embaralhe e escolha a sua carta</h>
            <br></br><br></br>
            <button onClick={virarCartas}> Embaralhar </button>
            </Titulo>
            </Header>
            <ContainerPrincipal>
                {mostrarCartas}
            </ContainerPrincipal>
          </Background>
            
        </div >
    )
}

export default Tarot;