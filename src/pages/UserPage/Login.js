import React, { Component } from 'react';
import LoginForm from '../../components/Login/LoginForm';

class Login extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if(user && user !== 'undefined') {
            this.props.history.push('/account');
        }
    }

    render() {
        return (
            <div>
                <LoginForm history={this.props.history} />
            </div>
        );
    }
}

export default Login;
