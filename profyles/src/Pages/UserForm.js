import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

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
        <div>
            <Container>
            <Form>
        <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Form>
            </Container>
        </div>
    );
};




}

export default UserForm;