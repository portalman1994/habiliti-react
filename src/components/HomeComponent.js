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
<<<<<<< HEAD
                    <Link to='/habiliti'><Button>Try Habiliti</Button></Link>
=======
                    <Button><Link to='/demo'>Try Habiliti</Link></Button>
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
                </div>
            </div>
        </div>
    );

}

function RenderCard({item}) {
    return (
        <Card>
<<<<<<< HEAD
            <CardImg src={item.image} alt={item.title.short}/>
=======
            <CardImg src={item.image} alt={item.title.short} />
>>>>>>> a6887970e05e0432dcb9cc12f6c13eb0a39c2b5c
            <CardBody>
                <CardTitle>{item.title.short}</CardTitle>
                <CardText>{item.description.short}</CardText>
            </CardBody>
        </Card>
    );
}

export default Home;