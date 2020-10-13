import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions'
import { Link } from 'react-router-dom';
import { decodeString } from '../../actions/HashString';
import fire from '../../config/Fire'

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
        var { listUser } = this.props;
        var user = listUser.find(user => {
            return user.email === this.state.email && decodeString(user.password) === this.state.password;
        })
        if (user) {
            alert("Đăng nhập thành công");
            this.props.setLogin(
                {
                    id: user.id,
                    email: user.email,
                    password: user.password,
                    fullname: user.fullname,
                    address: user.address,
                    company: user.company,
                    phone: user.phone
                }
            );
            this.props.history.push("/account");
        } else {
            alert("Sai tài khoản hoặc mật khẩu")
        }
    }

    render() {
        var user = fire.auth().currentUser;
        console.log(user);
        return (
            <>
                <div className="login__page pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Đăng nhập</h3>
                                <span style={{textAlign: 'center', width: '100%', display: 'block'}}>Demo: tk: user1@gmail.com, mk: 123456789</span>
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
                                                    password: (e.target.value)
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
        userLogin: state.userLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUser: () => {
            dispatch(actions.fetchAccountsRequest())
        },
        setLogin: (user) => {
            dispatch(actions.setLogin(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
