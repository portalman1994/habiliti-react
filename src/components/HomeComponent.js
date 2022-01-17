import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function Home(props) {
    return (
        <div className="container mt-2" id="content-wrap">
            <div className='row'>
                <div className='col-md text-center'>
                    <h2>Features</h2>
                </div>
            </div>
            <div className='row'>
                <div className="col-md m-1">
                    <RenderCard item={props.features[0]} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.features[1]} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.features[2]} />
                </div>
            </div>
            <div className='row'>
                <div className='col-md mt-4 mb-4 text-center'>
                    <Link to='/habiliti'><Button>Try Habiliti</Button></Link>
                </div>
            </div>
        </div>
    );

}

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.title.short} />
            <CardBody>
                <CardTitle>{item.title.short}</CardTitle>
                <CardText>{item.description.short}</CardText>
            </CardBody>
        </Card>
    );
}

export default Home;