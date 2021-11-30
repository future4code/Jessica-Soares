import React from 'react';
import styled from 'styled-components';


function CardGrande(props) {
    return (
        <BigcardContainer>
            <FotoBigCard src={ props.imagem } />
            <BigCard>
                <MeuNome> { props.nome } </MeuNome>
                <p>{ props.descricao }</p>
            </BigCard>
        </BigcardContainer>
    )
}

export default CardGrande;

const BigcardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const BigCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`; 

const FotoBigCard = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const MeuNome = styled.h4`
  margin-bottom: 15px;
`;

