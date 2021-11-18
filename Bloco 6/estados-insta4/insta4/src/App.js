import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}

          nomeUsuario1={'cláudia'}
          fotoUsuario1={'https://picsum.photos/40/50'}
          fotoPost1={'https://picsum.photos/190/150'}

          nomeUsuario2={'mayara'}
          fotoUsuario2={'https://picsum.photos/30/50'}
          fotoPost2={'https://picsum.photos/180/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
