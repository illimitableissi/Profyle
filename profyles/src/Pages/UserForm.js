import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import API from '../Utils/API'
import Modal from 'react-bootstrap/Modal'

class UserForm extends React.Component {
    state = {
        users: [],
        show: false
    }

componentDidMount() {
    this.loadUsers();
}

loadUsers = () => {
    API.getUsers()
    .then(res => {
        this.setState({ users: res.data });
    })
    .catch(err => console.log(err));
console.log(this.state);
}

handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
    console.log(value);
};

createUserPage = e => {
    e.preventDefault();
    API.createUser({
        userName: this.state.userName,
        profilePic: this.state.profilePic,
        backgroundImg: this.state.backgroundImg,
        summary: this.state.summary,
        photoUrlOne: this.state.photoUrlOne,
        photoOneCaption: this.state.photoOneCaption,
        photoUrlTwo:this.state.photoUrlTwo,
        photoTwoCaption: this.state.photoTwoCaption,
        photoUrlThree: this.state.photoUrlThree,
        photoThreeCaption: this.state.photoThreeCaption,
        goals: this.state.goals,
        accomplishments: this.state.accomplishments,
        hobbies: this.state.hobbies,
        skills:this.state.skills
    })
    .then(res => this.loadUsers())
    .catch(err => console.log(err));
    console.log("this works")
    this.setState({ show: true })
}


render () {
    return (
        <div style ={{ background: "#000080"}}>
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Website Link: </Modal.Title>
                </Modal.Header>
                    <Modal.Body>profyle.herokuapp.com/users/{this.state.userName}</Modal.Body>
                <Modal.Footer>
                <a href="/" role="button" className=" btn btn-primary">Go to the Homepage</a>
                <a href={"/users/" + this.state.userName} role="button" className=" btn btn-success">View Your Profyle!</a>
                </Modal.Footer>
            </Modal>
            <Jumbotron className="text-center">
                <h2>ENTER YOUR INFORMATION BELOW</h2>
                <p>(Please enter URLs for all images)</p>
            </Jumbotron>
            <Container style={{background: "white"}}>
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                            <Form.Control 
                             type="text"
                             name="userName" 
                             onChange={this.handleInputChange}
                             value={this.state.userName}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Profile Picture</Form.Label>
                            <Form.Control
                             type="text" 
                             name="profilePic" 
                             onChange={this.handleInputChange}
                             value={this.state.profilePic}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Background Image</Form.Label>
                            <Form.Control
                             type="text" 
                             name="backgroundImg" 
                             onChange={this.handleInputChange}
                             value={this.state.backgroundImg}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Profile Summary</Form.Label>
                            <Form.Control
                             type="text"
                             as="textarea" 
                             name="summary" 
                             onChange={this.handleInputChange}
                             value={this.state.summary}
                            />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Photo 1</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoUrlOne" 
                             onChange={this.handleInputChange}
                             value={this.state.photoUrlOne}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Caption</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoOneCaption"
                             onChange={this.handleInputChange}
                             value={this.state.photoOneCaption}
                            />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Photo 2</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoUrlTwo"
                             onChange={this.handleInputChange}
                             value={this.state.photoUrlTwo}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Caption</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoTwoCaption" 
                             onChange={this.handleInputChange}
                             value={this.state.photoTwoCaption}
                            />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Photo 3</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoUrlThree" 
                             onChange={this.handleInputChange}
                             value={this.state.photoUrlThree}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Caption</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoThreeCaption"
                             onChange={this.handleInputChange}
                             value={this.state.photoThreeCaption}
                            />
                    </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Life Goals</Form.Label>
                            <Form.Control
                             type="text" 
                             name="goals" 
                             as="textarea" 
                             onChange={this.handleInputChange}
                             value={this.state.goals}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Accomplishments</Form.Label>
                            <Form.Control 
                             type="text"
                             name="accomplishments" 
                             as="textarea" 
                             onChange={this.handleInputChange}
                             value={this.state.accomplishments}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Hobbies</Form.Label>
                            <Form.Control 
                             type="text"
                             name="hobbies" 
                             as="textarea" 
                             onChange={this.handleInputChange}
                             value={this.state.hobbies}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Skills</Form.Label>
                            <Form.Control 
                             type="text"
                             name="skills" 
                             as="textarea" 
                             onChange={this.handleInputChange}
                             value={this.state.skills}
                            />
                    </Form.Group>
                    <Button type="submit"
                    onClick={this.createUserPage}
                    >Create Profile</Button>
                </Form>
            </Container>
        </div>
    );
};




}

export default UserForm;