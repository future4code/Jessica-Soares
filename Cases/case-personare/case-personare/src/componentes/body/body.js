import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function body() {
    
    const [image, setImage] = useState("")
    const [data, setData] = useState(undefined)
    const [cards, setCards] = useState([])
    

    const getData = () => {
        axios
            .get("tarot.json")
            .then((response) => {
                setData(response.data);
                setCards(response.data.cards)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData()
    }, []);
}

export default body;