import React from 'react';
import API from '../Utils/API';

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
            <p>{this.state.user.userName}</p>
        </div>
    );
};

}

export default YourPage;