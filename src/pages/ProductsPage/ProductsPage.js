import React, { Component } from 'react';
import BannerPage from '../../components/Banner/BannerPage';
import HomeProducts from '../../components/Products/HomeProducts';
import SideBar from '../../components/SideBar/SideBar';

const styleSection = {
    marginTop: "30px"
}

const styleDiv = {
    width: "100%"
}

class ProductsPage extends Component {

    // componentDidMount() {
    //     var { match } = this.props;
    //     console.log(match.params.category);
    // }

    render() {
        var { match } = this.props;
        var textFilter = match.params.category;
        return (
            <>
                <BannerPage textHeading={textFilter} />
                <section className="main__content" style={styleSection}>
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="main__content-products" style={styleDiv}>
                                        <HomeProducts match={match} textFilter={textFilter} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProductsPage;
