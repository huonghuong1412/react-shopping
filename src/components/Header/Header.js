import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import './index.css'
class Header extends Component {

    render() {
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
                                <ul className="header__aside--info-top">
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

export default Header;