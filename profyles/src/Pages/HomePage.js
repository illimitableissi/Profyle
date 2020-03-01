import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './pages.css'


const HomePage = () => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Profyle</h1>
                <p>Profyle is a quick "About Me" page creation app. </p>
                <a href="/form" role="button" className="btn btn-primary">Create Your Page!</a>
            </Jumbotron>
                <h5 className="text-center">Your page Template --></h5>
                <hr></hr>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#showcase">Showcase</Nav.Link>
                    <Nav.Link href="#information">Information</Nav.Link>
                </Nav>
                </Navbar>
            <Container fluid className="pageWrapper">
                <Row id="home" className="text-center">
                    <Col>
                    <h3 className="text-center">Profile Pic Here:</h3>
                    <Image className="profilePic" src="/images/landscape2.jpg" rounded fluid/>
                    </Col>
                </Row>
                <br></br>
                <Row className="text-center">
                    <Col>
                    <h3 data-aos="fade-up" data-aos-duration="1000">Quick Summary of Yourself:</h3>
                    <Card body data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nobis sequi, corporis optio labore nisi sapiente accusamus vitae et quam illo, impedit inventore eveniet voluptatum necessitatibus provident autem incidunt eos.</Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row id="showcase">
                    <Col>
                    <h3 className="text-center" data-aos="fade-up" data-aos-duration="1000">Showcase your photos here:</h3>
                    <br></br>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/gray.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/gray.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/gray.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
                <br></br>
                </Col>
                </Row>
                <h3 className="text-center" data-aos="fade-up" data-aos-duration="1000">Your Information:</h3>
                <br></br>
                <Row id="information">
                    <Col xs={6} md={3}>
                        <Card border="light" data-aos="fade-right" data-aos-duration="2000">
                            <Card.Header>Life Goals</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nobis sequi, corporis optio labore nisi sapiente accusamus vitae et quam illo, impedit inventore eveniet voluptatum necessitatibus provident autem incidunt eos.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3}>
                    <Card border="light"  data-aos="fade-right" data-aos-duration="2000">
                            <Card.Header>Notable Accomplishments</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nobis sequi, corporis optio labore nisi sapiente accusamus vitae et quam illo, impedit inventore eveniet voluptatum necessitatibus provident autem incidunt eos.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3}>
                    <Card border="light" data-aos="fade-left" data-aos-duration="2000">
                            <Card.Header>Hobbies</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nobis sequi, corporis optio labore nisi sapiente accusamus vitae et quam illo, impedit inventore eveniet voluptatum necessitatibus provident autem incidunt eos.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={6} md={3}>
                        <Card border="light" data-aos="fade-left" data-aos-duration="2000">
                            <Card.Header>Skills</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nobis sequi, corporis optio labore nisi sapiente accusamus vitae et quam illo, impedit inventore eveniet voluptatum necessitatibus provident autem incidunt eos.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>       
        </div>
    );
};

export default HomePage;