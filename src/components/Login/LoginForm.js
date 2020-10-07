import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../actions/UserActions'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { email, password } = this.state;
        this.props.login(email, password)
    }
    render() {
        var { isLoginRequest, isLoginSuccess, isLoginFail } = this.props;
        return (
            <div id="customer-login" style={{ marginTop: '100px' }}>
                <div id="login" className="userbox">
                    <form onSubmit={this.onSubmit} id="customer_login">
                        <div className="clearfix large_form">
                            <label htmlFor="customer_email" className="icon-field">
                                <i className="icon-login icon-envelope "></i>
                            </label>
                            <input
                                required
                                type="email"
                                name=""
                                id="customer_email"
                                placeholder="Email"
                                className="text"
                                onChange={(e) => this.setState({
                                    email: e.target.value
                                })}
                            />
                        </div>
                        <div className="clearfix large_form">
                            <label htmlFor="customer_password" className="icon-field"><i className="icon-login icon-shield"></i></label>
                            <input
                                required
                                type="password"
                                name=""
                                id="customer_password"
                                placeholder="Mật khẩu"
                                className="text"
                                size="16"
                                onChange={(e) => this.setState({
                                    password: e.target.value
                                })}
                            />
                        </div>


                        <div className="action_bottom">
                            <input className="btn btn-signin" type="submit" value="Đăng nhập" />
                        </div>
                        <div className="req_pass">
                            <a href="/">Quên mật khẩu?</a>hoặc <a href="/account/register" title="Đăng ký">Đăng ký</a>
                        </div>
                        {isLoginRequest && <p>...</p>}
                        {isLoginSuccess && <p>Success</p> && sessionStorage.setItem('user', JSON.stringify(this.state)) && <Redirect to="/account"></Redirect>}
                        {isLoginFail && <p>Fail</p>}
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginRequest: state.user.isLoginRequest,
        isLoginSuccess: state.user.isLoginSuccess,
        isLoginFail: state.user.isLoginFail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(login(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
