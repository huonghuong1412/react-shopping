import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <div className="header__aside--cart">
                                <Link to="/cart" className="header__aside--cart-icon">
                                    <img src="http://theme.hstatic.net/1000239816/1000467243/14/cart-icon.png?v=182" alt="" />
                                    <span className="header__aside--cart-quantity">
                                        1
                                    </span>
                                </Link>
                                <div className="header__aside--cart-content">
                                    <ul className="header__aside--cart-list">
                                        <li className="header__aside--cart-item">
                                            <Link to="/" className="header__aside--cart-img">
                                                <img src="./img/ao-cotton-hoa-nghe-thuat-co-v-1_87da610ff3b94b4ca9196c5fa3f2433e_large.jpg"
                                                    alt="" />
                                            </Link>
                                            <div className="header__aside--cart-info">
                                                <Link to="/" className="header__aside--cart-title">
                                                    A1513-Áo Cotton Hoa Nghệ Thuật Cổ V
                                                </Link>
                                                <p className="header__aside--cart-size">
                                                    Free Size
                                                </p>
                                                <p className="header__aside--cart-view">
                                                    <span className="header__aside--cart-number">1</span>
                                                    <span className="header__aside--cart-price">
                                                        428,000₫
                                            </span>
                                                </p>
                                            </div>
                                            <div className="header__aside--cart-action">
                                                <span>
                                                    <i className="fa fa-times"></i>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <span className="line"></span>
                                    <div className="header__aside--cart-total">
                                        <div className="header__aside--cart-total-text">
                                            <p className="header__aside--cart-total-left">
                                                Tổng tiền:
                                            </p>
                                            <p className="header__aside--cart-total-right">
                                                1,026,000₫
                                            </p>
                                        </div>
                                        <div className="header__aside--cart-total-bottom">
                                            <Link to="/cart" className="header__aside--cart-total-link addtocart">
                                                Xem giỏ hàng
                                            </Link>
                                            {/* add token in checkout */}
                                            <Link to="/checkouts" className="header__aside--cart-total-link checkout">
                                                Thanh toán
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
