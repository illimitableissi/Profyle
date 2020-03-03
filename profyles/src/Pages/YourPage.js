import React from 'react';
import API from '../Utils/API';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './pages.css'

class  YourPage extends React.Component {
    state = {
        user: {}
    }

componentDidMount() {
    API.getUserName(this.props.match.params.userName)
    .then(res => this.setState({ user: res.data}))
    .catch(err => console.log(err));
    console.log(this.state)
}


render () {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">{this.state.user.userName}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#showcase">Showcase</Nav.Link>
                    <Nav.Link href="#information">Information</Nav.Link>
                </Nav>
                </Navbar>
            <Container fluid className="personalWrapper" style={{ backgroundImage: 'url(' + this.state.user.backgroundImg + ')' }}>
                <Row id="home" className="text-center">
                    <Col>
                    <Image className="profilePic" src={this.state.user.profilePic} rounded fluid/>
                    </Col>
                </Row>
                <br></br>
                <Row className="text-center">
                    <Col>
                    <Card body data-aos="fade-up" data-aos-duration="1000">{this.state.user.summary}</Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row id="showcase">
                    <Col>
                    <h3 className="text-center" data-aos="fade-up" data-aos-duration="1000">Showcase</h3>
                    <br></br>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.user.photoUrlOne}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <p>{this.state.user.photoOneCaption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.user.photoUrlTwo}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <p>{this.state.user.photoTwoCaption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={this.state.user.photoUrlThree}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <p>{this.state.user.photoThreeCaption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
                <br></br>
                </Col>
                </Row>
                <br></br>
                <Row id="information">
                    <Col xs={12} md={3}>
                        <Card border="light" data-aos="fade-right" data-aos-duration="2000">
                            <Card.Header>Life Goals</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {this.state.user.goals}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                    <Card border="primary"  data-aos="fade-right" data-aos-duration="2000">
                            <Card.Header>Notable Accomplishments</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    {this.state.user.accomplishments}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                    <Card border="success" data-aos="fade-left" data-aos-duration="2000">
                            <Card.Header>Hobbies</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    {this.state.user.hobbies}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={12} md={3}>
                        <Card border="danger" data-aos="fade-left" data-aos-duration="2000">
                            <Card.Header>Skills</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                    {this.state.user.skills}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
            </Container>
            <Navbar bg="dark" variant="dark" sticky="bottom">
                <Navbar.Brand href="#home">Profyle</Navbar.Brand>
                <Nav className="mr-auto">
                <Navbar.Text>
           Created by NastyNubianProductionz
            </Navbar.Text>
                </Nav>
                </Navbar>       
        </div>
    );
};

}

export default YourPage;