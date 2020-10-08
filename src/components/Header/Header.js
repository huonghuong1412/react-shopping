import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import { decodeString } from '../../actions/HashString'
import { connect } from 'react-redux';
class Header extends Component {
    
    checkUserLogined = (user, isLoginSuccess) => {
        if (user && isLoginSuccess===false) {
            return (
                <ul className="header__aside--info-top">
                    <li>
                        <Link to="/account" className="header__aside--info-link">
                            Tài khoản của bạn
                        </Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className='header__aside--info-top'>
                    <li>
                        <Link to="/account/register" className="header__aside--info-link">
                            Đăng ký
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/login" className="header__aside--info-link">
                            Đăng nhập
                        </Link>
                    </li>
                </ul>
            )
        }
    }


    render() {
        var user = sessionStorage.getItem('user') ? JSON.parse(decodeString(sessionStorage.getItem('user'))) : '';
        var { isLoginSuccess } = this.props;
        return (
            <>
                <header className="header" id="header">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar__collapse--icon">
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="header__logo">
                            <Link to="/">
                                <img className="header__logo-img" src="https://theme.hstatic.net/1000239816/1000467243/14/logo.png?v=186" alt="" />
                            </Link>
                        </div>
                        <div className="header__main--search">
                            <input type="text" className="header__main--search-input" placeholder="Tìm kiếm" />
                            <button className="header__main--search-btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div className="header__aside">
                            <div className="header__aside--info">
                                {this.checkUserLogined(user, isLoginSuccess)}
                                <Link to="/account/login" className="header__aside--info-user">
                                    <i className="fa fa-user"></i>
                                </Link>
                                <div className="header__aside--info-bottom">
                                    <p>Miễn phí vận chuyển toàn quốc</p>
                                </div>
                            </div>
                            <HeaderCart />
                        </div>
                    </div>
                </header>
            </>
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


export default connect(mapStateToProps, null)(Header);
