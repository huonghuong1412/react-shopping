import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountSideBar extends Component {
    render() {
        return (
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
        );
    }
}

export default AccountSideBar;
