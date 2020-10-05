import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions/HomeActions'
import Banner from '../../components/Banner/Banner';
import LoadMore from '../../components/Button/LoadMore';
import HomeProducts from '../../components/Products/HomeProducts';
import Slide from '../../components/Slide/Slide';
import Title from '../../components/Title/Title';

class HomePage extends Component {

    removeVietnameseTones(str) {
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .split(' ').join('-');
    }

    format_curency = ((money) => {
        money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return money + "₫";
    });

    render() {
        return (
            <>
                <Slide />
                <section className="products__main">
                    <div className="container">
                        <Title
                            title='Sản phẩm'
                            img="https://theme.hstatic.net/1000239816/1000467243/14/icon_featured.png?v=186"
                        />
                        <HomeProducts textFilter="" />
                        <LoadMore link="/collections/all" />
                        <Banner />
                        <Title
                            title='Giày'
                            img="https://theme.hstatic.net/1000239816/1000467243/14/icon_sale.png?v=186"
                        />
                        <HomeProducts textFilter="Giày" />
                        <LoadMore link="/collections/giay" />
                    </div>
                </section>
            </>
        );
    }
}

export default HomePage;
