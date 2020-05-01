import React, {useState, useEffect} from "react";
import "../App";
import {Collapse, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";

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

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className = "photoCard">
            <Card>
                <CardImg width= "50%" src= {photo.hdurl} alt = "NASA Pic of the Day" />
                <CardBody>
                    <CardTitle>{photo.title}</CardTitle>
                    <CardSubtitle>{photo.date}</CardSubtitle>
                    <Button color="primary" onClick={toggle} style={{marginBottom: "1rem"}}>Learn More</Button>
                    <Collapse isOpen= {isOpen}>
                        <Card>
                            <CardBody>
                                Test
                                {/* <CardText>Test</CardText> */}
                            </CardBody>
                        </Card>
                    </Collapse>
                </CardBody>
            </Card>
        </div>
    )
}

export default Photos;