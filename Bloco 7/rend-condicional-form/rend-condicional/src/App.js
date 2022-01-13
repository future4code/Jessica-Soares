import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const Container = styled.div`
text-align: center;
`

class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  proximaEtapa = () => {
    this.setState({etapa : this.state.etapa + 1});
  };
  
  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.state.etapa !==4 && (
          <button onClick={this.proximaEtapa}>Próxima Etapa</button>
        )}
        
      </Container>
    )

  }
    

}

export default App;
