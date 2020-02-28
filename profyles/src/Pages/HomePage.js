import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const HomePage = () => {
    return (
        <div>
            <Container>
                <Jumbotron className="text-center">
                    <h1>Profyle</h1>
                    <p>Profyle is a quick "About Me" page creation app. </p>
                    <a href="/form" role="button" className="btn btn-primary">Create Your Page!</a>
                </Jumbotron>
                    <h5 className="text-center">See your page below</h5>
            </Container>           
        </div>
    );
};

export default HomePage;