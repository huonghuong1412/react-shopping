import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/UserActions'
class AccountSideBar extends Component {

    handleLogout = () => {
        this.props.logout();
    }
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
                                    this.handleLogout()
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

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actions.isLogout())
        }
    }
}

export default connect(null, mapDispatchToProps)(AccountSideBar);
