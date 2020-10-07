import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
class User extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if(user && user !== 'undefined') {
            this.props.history.push('/account');
        } else {
            this.props.history.push('/account/login');
        }
    }

    render() {
        // var user = JSON.parse(sessionStorage.getItem('user'));
        return (
            <>
                <div className="account__page pt-5 mb-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Tài khoản của bạn</h3>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="account__sidebar">
                                    <h4 className="account__sidebar--title">
                                        Tài khoản
                                    </h4>
                                    <div className="account__sidebar--content">
                                        <ul className="account__sidebar--list">
                                            <li>
                                                <Link to="/account" className="account__sidebar--link">
                                                    Thông tin tài khoản
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/account/change" className="account__sidebar--link">
                                                    Thay đổi thông tin
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/account/login" onClick={() => {
                                                    sessionStorage.removeItem('user')
                                                }} className="account__sidebar--link">
                                                    Đăng xuất
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="account__info">
                                    <h3 className="account__info--title">
                                        Thông tin tài khoản
                                    </h3>
                                    <h2 className="account__info--name">
                                        Nguyen Tri
                                    </h2>
                                    <h2 className="account__info--email">
                                        huong@gmail.com
                                    </h2>
                                    <p className="account__info--address">
                                        Viet Nam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default User;
