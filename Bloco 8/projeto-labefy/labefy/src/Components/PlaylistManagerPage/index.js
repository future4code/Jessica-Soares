import React from "react";
import styled from "styled-components";
import PlaylistDetail from "../PlaylistDetail";
import Playlists from "../Playlists";

const PlaylistManagerContainer = styled.div`

`

class PlaylistManagerPage extends React.Component {
    state = {
        currentPage: "playlists",
        playlistId: ""
    };

    changePage = (currentPage, playlistId) => {
        this.setState({
            currentPage: currentPage,
            playlistId: playlistId
        })
    }

    render () {
        const renderCurrentPage = () => {
            if (this.state.currentPage === "playlists") {
                return <Playlists 
                    changePage={this.changePage}
                />
            } else if (this.state.currentPage === "playlistDetail") {
                return <PlaylistDetail 
                    changePage={this.changePage}
                    playlistId={this.state.playlistId}
                />
            }
        }

        return (
            <PlaylistManagerContainer>
                {renderCurrentPage()}
            </PlaylistManagerContainer>
        )
    };
};

export default PlaylistManagerPage