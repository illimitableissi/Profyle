import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class UserForm extends React.Component {
    state = {}


componentDidMount() {}

handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
    console.log(value);
};


render () {
    return (
        <div style ={{ background: "#000080"}}>
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
                             value={this.state.userName}
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
                             name="photoUrl"
                             placeholder="Photo 1"  
                             onChange={this.handleInputChange}
                            //  value={this.state.photoUrlOne.url}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Caption</Form.Label>
                            <Form.Control
                             type="text" 
                             name="caption"
                             placeholder="Photo 1"  
                             onChange={this.handleInputChange}
                            //  value={this.state.photoUrlOne.caption}
                            />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Photo 2</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoUrl"
                             placeholder="Photo 1"  
                             onChange={this.handleInputChange}
                            //  value={this.state.photoUrlOne.url}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Caption</Form.Label>
                            <Form.Control
                             type="text" 
                             name="caption" 
                             onChange={this.handleInputChange}
                            //  value={this.state.photoUrlOne.caption}
                            />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Photo 3</Form.Label>
                            <Form.Control
                             type="text" 
                             name="photoUrl"
                             placeholder="Photo 3"  
                             onChange={this.handleInputChange}
                            //  value={this.state.photoUrlOne.url}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Caption</Form.Label>
                            <Form.Control
                             type="text" 
                             name="caption"
                             onChange={this.handleInputChange}
                            //  value={this.state.photoUrlOne.caption}
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
                    <Button type="submit">Create Profile</Button>
                </Form>
            </Container>
        </div>
    );
};




}

export default UserForm;