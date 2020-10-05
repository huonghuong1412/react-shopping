import React, { Component } from 'react';
class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <span className="close">
                        <i className="fa fa-times"></i>
                    </span>
                    <div className="guest">
                        <div className="guest__image">
                            <img src="https://kt.city/static/default-avatar.png" className="guest__image--white" alt="" />
                        </div>
                        <div className="guest__info">
                            Hello,
                    <strong>Guest</strong>
                        </div>
                    </div>
                    <div className="container">
                        <div className="navbar__main">
                            <ul className="navbar__main--menu">
                                <li>
                                    <a href="/" className="navbar__main--link active">
                                        <span>Trang chủ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="navbar__main--link">
                                        <span>Sản phẩm</span>
                                    </a>
                                </li>
                                <li className="hasDropdown">
                                    <a href="/" data-toggle="collapse" className="navbar__main--link">
                                        <span>Hướng dẫn</span>
                                        <span>
                                            <i className="fas fa-caret-down navbar__main--link-icon"></i>
                                        </span>
                                    </a>
                                    <ul className="dropdown-list">
                                        <li className="dropdown-title">
                                            <span className="dropdown-title-icon">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                            <span className="dropdown-title-text">Hướng dẫn</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Tài khoản ngân hàng
                                    </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Hướng dẫn mua hàng
                                    </a>
                                        </li>
                                    </ul>
                                    <span className="navbar__main--link-right">
                                        <i className="fas fa-angle-right"></i>
                                    </span>
                                </li>
                                <li className="hasDropdown">
                                    <a href="/" className="navbar__main--link">
                                        <span>Chính sách</span>
                                        <span>
                                            <i className="fas fa-caret-down navbar__main--link-icon"></i>
                                        </span>
                                    </a>
                                    <ul className="dropdown-list">
                                        <li className="dropdown-title">
                                            <span className="dropdown-title-icon">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                            <span className="dropdown-title-text">Chính sách</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Chính sách vận chuyển
                                    </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Chính sách đổi trả
                                    </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Chính sách thanh toán
                                    </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Chính sách bảo mật
                                    </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="/" className="navbar__main--link">
                                                Chính sách bảo hành
                                    </a>
                                        </li>
                                    </ul>
                                    <span className="navbar__main--link-right">
                                        <i className="fas fa-angle-right"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="/" className="navbar__main--link">
                                        <span>Tin tức</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="navbar__main--link">
                                        <span>Giới thiệu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="navbar__main--link">
                                        <span>Liên hệ</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="navbar__main--phone">
                                <span href="#" className="navbar__main--phone-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <span className="navbar__main--phone-number">08.88.37.29.29</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
