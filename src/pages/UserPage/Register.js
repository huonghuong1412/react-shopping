import React, { Component } from 'react';

class Register extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if(user && user !== 'undefined') {
            this.props.history.push('/account');
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Register;
