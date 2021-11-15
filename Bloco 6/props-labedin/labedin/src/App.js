import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/perfil.jpg';
import logoUfrn from './img/logo-ufrn.png';
import logoCaixa from './img/logo-caixa.png';
import email from './img/email.png'
import endereço from './img/endereço.jpg'
import styled from 'styled-components'

const BigCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const FotoBigCard = styled.image`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const TextoBigCard = styled.div`
  margin-bottom: 15px;
`;

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <BigCard> 
          <FotoBigCard><CardGrande imagem={foto} /> </FotoBigCard>
          <TextoBigCard>
            <CardGrande
            nome="Jéssica"
            descricao="Oi, eu sou Jéssica, atualmente bancária e futura desenvolvedora!"
            />
          </TextoBigCard>
        </BigCard>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          descricao="email: jessica@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={endereço}
          descricao="Endereço: Rua Santa Bárbara, 42"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <BigCard>
        <FotoBigCard><CardGrande imagem={logoUfrn} /></FotoBigCard>
        <TextoBigCard>
        <CardGrande
          nome="Universidade" 
          descricao="Formada em GPP na UFRN" 
        />
        </TextoBigCard>

        <CardGrande 
          imagem={logoCaixa}
          nome="CAIXA" 
          descricao="Bancária há sete anos" 
        />
        </BigCard>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
