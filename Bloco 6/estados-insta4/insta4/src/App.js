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
        />

        <Post
          nomeUsuario={'cláudia'}
          fotoUsuario={'https://picsum.photos/40/50'}
          fotoPost={'https://picsum.photos/190/150'}
        />

        <Post
          nomeUsuario={'mayara'}
          fotoUsuario={'https://picsum.photos/30/50'}
          fotoPost={'https://picsum.photos/180/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
