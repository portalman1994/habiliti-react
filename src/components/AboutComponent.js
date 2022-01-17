import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';


function About() {
    return (
        <div className="container">
            <div className="row">
                <div className='col mt-4'>
                    <h2>About Habiliti</h2>
                    <hr />
                </div>
            </div>
            <div className='row row-content'>
                <div className='col'>
                    <h3>Goal of Habiliti</h3>
                    <p>I initially created Habiliti to help myself complete and manage my goals. I have difficulty remembering to do simple tasks. I know there are others like me on the Autism Spectrum who also have the same hardships.</p>
                </div>
                <div className="col">
                    <Card>
                        <CardHeader className="bg-dark text-white"><h3>Habiliti Facts</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Created</dt>
                                <dd className='col-6'>2021</dd>
                                <dt className='col-6'>No. of days for habit to be formed</dt>
                                <dd className='col-6'>18 to 254 days</dd>
                                <dt className='col-6'>No. of days for behavior to become automatic</dt>
                                <dd className='col-6'>66 days</dd>
                            </dl>
                        </CardBody>
                    </Card>    
                </div>
            </div>
        </div>
    );    
}

export default About;