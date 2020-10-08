import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashString } from '../../actions/HashString';
import * as actions from './../../actions/UserActions'
import './index.css'

const styleForm = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: '',
            address: '',
            company: '',
            phone: ''
        }
    }

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if (user && user !== 'undefined') {
            this.props.history.push('/account');
        }
    }

    handleSubmit = () => {
        var { email, fullname, password, address, company, phone } = this.state;
        var account = {
            email,
            password,
            fullname,
            address,
            company,
            phone
        }
        this.props.addUser(account)
        // sessionStorage.setItem('user', hashString(JSON.stringify(this.state)))
        alert("Đăng ký thành công!");
    }

    render() {
        var { email, fullname, address, company, phone } = this.state;
        return (
            <>
                <div className="login__page pt-3 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Đăng ký</h3>
                            </div>
                            <div className="col-12">
                                <div clas="customer-login pb-5" style={styleForm}>
                                    <div className="customer-login--inner">
                                        <div className="large_form">
                                            <label htmlFor="customer_email" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                value={email}
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
                                        <div className="large_form">
                                            <label htmlFor="customer_fullname" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="fullname"
                                                value={fullname}
                                                id="customer_fullname"
                                                placeholder="Họ tên"
                                                className="customer_input"
                                                onChange={(e) => this.setState({
                                                    fullname: e.target.value
                                                })}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_address" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                value={address}
                                                id="customer_address"
                                                placeholder="Địa chỉ"
                                                className="customer_input"
                                                onChange={(e) => this.setState({
                                                    address: e.target.value
                                                })}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_company" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="company"
                                                value={company}
                                                id="customer_company"
                                                placeholder="Công ty"
                                                className="customer_input"
                                                onChange={(e) => this.setState({
                                                    company: e.target.value
                                                })}
                                            />
                                        </div>
                                        <div className="large_form">
                                            <label htmlFor="customer_phone" className="icon-field">
                                                <i className="fa fa-envelope icon-login"></i>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="phone"
                                                value={phone}
                                                id="customer_phone"
                                                placeholder="Số điện thoại"
                                                className="customer_input"
                                                onChange={(e) => this.setState({
                                                    phone: e.target.value
                                                })}
                                            />
                                        </div>
                                        <div className="action_bottom">
                                            <button
                                                className="btn btn-signin"
                                                onClick={this.handleSubmit}
                                            >Đăng ký</button>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (account) => {
            dispatch(actions.fetchAddUserRequest(account))
        }
    }
}

export default connect(null, mapDispatchToProps)(Register);
