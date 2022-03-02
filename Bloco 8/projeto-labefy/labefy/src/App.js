import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import PlaylistCreationPage from "./Components/PlaylistCreationPage";
import PlaylistManagerPage from "./Components/PlaylistManagerPage";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    heigth: 100vw;
`

class App extends React.Component {
    state = {
        currentPage: "playlistCreationPage"
    }

    changePage = (currentPage) => {
        this.setState({currentPage: currentPage})
    }


render() {
    const renderCurrentPage = () => {
        if(this.state.currentPage === "playlistCreationPage") {
            return <PlaylistCreationPage />
        } else if (this.state.currentPage === "playlistManagerPage") {
            return <PlaylistManagerPage />
        }
    }
    return (
        <AppContainer>
            <Header 
            changePage={this.changePage}
            />
            {renderCurrentPage()}
        </AppContainer>
    )  
 }
}


export default App;