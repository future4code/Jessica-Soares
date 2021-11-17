import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/perfil.jpg';
import logoUfrn from './img/logo-ufrn.png';
import logoCaixa from './img/logo-caixa.png';
import email from './img/email.png';
import endereço from './img/endereço.jpg';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto} 
          nome="Jéssica"
          descricao="Oi, eu sou Jéssica, atualmente bancária e futura desenvolvedora!"
        />  
        
        
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
        <CardGrande
         imagem={logoUfrn}
          nome="Universidade" 
          descricao="Formada em GPP na UFRN" 
        />
        

        <CardGrande 
          imagem={logoCaixa}
          nome="CAIXA" 
          descricao="Bancária há sete anos" 
        />
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
