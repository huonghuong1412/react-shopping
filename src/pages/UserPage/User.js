import React, { Component } from 'react';
import { decodeString } from '../../actions/HashString';
import AccountSideBar from '../../components/User/AccountSideBar';
import Order from '../../components/User/Order';
import './index.css'
class User extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if (user && user !== 'undefined') {
            this.props.history.push('/account');
        } else {
            this.props.history.push('/account/login');
        }
    }

    render() {
        var user = sessionStorage.getItem('user') ? JSON.parse(decodeString(sessionStorage.getItem('user'))) : '';

        return (
            <>
                <div className="account__page pt-3 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Tài khoản của bạn</h3>
                            </div>
                            <AccountSideBar />
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="account__info">
                                    <h3 className="account__info--title">
                                        Thông tin tài khoản
                                    </h3>
                                    <h2 className="account__info--name">
                                        {user.email}
                                    </h2>
                                    <h2 className="account__info--email">
                                        {user.email}
                                    </h2>
                                    <p className="account__info--address">
                                        {user.address}
                                    </p>
                                </div>
                                <Order />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default User;
