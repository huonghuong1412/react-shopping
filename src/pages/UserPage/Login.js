import React, { Component } from 'react';
import { decodeString } from '../../actions/HashString';
import LoginForm from '../../components/Login/LoginForm';

class Login extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user') ? JSON.parse(decodeString(sessionStorage.getItem('user'))) : '';
        if(user && user !== 'undefined') {
            this.props.history.push('/account');
        }
    }

    render() {
        return (
            <>
                <LoginForm history={this.props.history} />
            </>
        );
    }
}

export default Login;
