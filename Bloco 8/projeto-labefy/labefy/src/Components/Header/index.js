import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    heigth: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>
                <button onClick={() => props.changePage("playlistCreationPage")}>Cadastrar playlist</button>
                <button onClick={() => props.changePage("playlistManagerPage")}>Gerenciar playlist</button>
            </ButtonsContainer>

        </HeaderContainer>
    )
}

export default Header;