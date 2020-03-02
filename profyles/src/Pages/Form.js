import React from 'react';

class Form extends React.Component {
    state = {}



componentDidMount()

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
            
        </div>
    );
};




}

export default Form;