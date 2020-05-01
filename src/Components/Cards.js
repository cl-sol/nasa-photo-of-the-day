import React from "react";
import {Card, CardImg, CardText, CardBody, Cardtitle, Cardsubtitle, Button, Collapse, CardTitle} from "reactstrap";

const Cards = (props) => {
    console.log(props);

    return (
        <Card>
            <CardImg width="50%" src={props.data.hdurl} alt="NASA Photo of the Day" />
            <CardBody>
                <CardTitle>{props.data.title}</CardTitle>
                <CardText>{props.data.explanation}</CardText>
                <Button>Learn More</Button>
            </CardBody>
        </Card>
    )
}

export default Cards;