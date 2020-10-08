import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions'
import { hashString } from '../../actions/HashString'
import { Link } from 'react-router-dom';
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            email: '',
            password: '',
            fullname: '',
            address: '',
            company: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.props.getAllUser();
    }

    onSubmit = (e) => {
        e.preventDefault();
        // var { email, password } = this.state;
        var { listUser } = this.props;
        for (var i = 0; i < listUser.length; i++) {
            if(this.state.email === listUser[i].email && this.state.password === listUser[i].password) {
                this.setState({
                    id: listUser[i].id,
                    email: listUser[i].email,
                    password: listUser[i].password,
                    fullname: listUser[i].fullname,
                    address: listUser[i].address,
                    company: listUser[i].company,
                    phone: listUser[i].phone
                })
            }
            this.props.login({ account: listUser[i], user: this.state })
        }
    }

    render() {
        var { isLoginRequest, isLoginSuccess, isLoginFail } = this.props;
        return (
            <>
                <div className="login__page pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Đăng nhập</h3>
                            </div>
                            <div className="col-12">
                                <div className="customer-login">
                                    <form onSubmit={this.onSubmit} id="customer_login" action="/account/recover" method="POST">
                                        <div className="large_form">
                                            <label htmlFor="customer_email" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name=""
                                                id="customer_email"
                                                placeholder="Email"
                                                className="customer_input"
                                                onChange={(e) => this.setState({
                                                    email: e.target.value
                                                })}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_password" className="icon-field">
                                                <i className="fas fa-shield-alt icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="password"
                                                name=""
                                                id="customer_password"
                                                placeholder="Mật khẩu"
                                                className="customer_input"
                                                size="16"
                                                onChange={(e) => this.setState({
                                                    password: hashString(e.target.value)
                                                })}
                                            />
                                        </div>
                                        <div className="action_bottom">
                                            <input className="btn btn-signin" type="submit" value="Đăng nhập" />
                                        </div>
                                        <div className="req_pass">
                                            <Link to="/">Quên mật khẩu?</Link>
                                            <span>hoặc </span>
                                            <Link to="/account/register" title="Đăng ký">Đăng ký</Link>
                                        </div>
                                        {isLoginRequest && <p>...</p>}
                                        {isLoginSuccess && sessionStorage.setItem('user', hashString(JSON.stringify(this.state)))}
                                        {/* {isLoginSuccess && <Redirect to="/account"></Redirect>} */}
                                        {isLoginSuccess && (window.location.href = "/account")}
                                        {isLoginFail && <p className="pt-5" style={{ color: 'red' }}>Sai tài khoản hoặc mật khẩu</p>}
                                    </form>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUser: state.user.listUser,
        isLoginRequest: state.user.isLoginRequest,
        isLoginSuccess: state.user.isLoginSuccess,
        isLoginFail: state.user.isLoginFail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: ({ account, user }) => {
            dispatch(actions.login({ account, user }))
        },
        getAllUser: () => {
            dispatch(actions.fetchAccountsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
