import React, {useState, useEffect} from "react";
import "../App";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";

import axios from "axios";

function Photos(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=BOz6nziSwbVIhdzXewi21eY2nptopCET3PalKATx")
        .then(response => {
            console.log(response);
            setPhoto(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className = "photoCard">
            <Card>
                <CardImg width= "100%" src= {photo.hdurl} alt = "NASA Pic of the Day" />
                <CardBody>
                    <CardTitle>{photo.title}</CardTitle>
                    <CardSubtitle>{photo.date}</CardSubtitle>
                    <CardText>{photo.explanation}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Photos;