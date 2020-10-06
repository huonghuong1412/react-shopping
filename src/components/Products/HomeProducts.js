import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/HomeActions'
import { showModal, hideModal } from '../../actions/ModalActions'
import { addToCart } from '../../actions/CartActions'
import ModalRoot from '../Modal/ModalRoot';

class HomeProducts extends PureComponent {

    componentDidMount() {
        this.props.getListProduct();
    }

    closeModal = () => {
        this.props.hideModal();
    }

    openModalCart = (product) => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal
        }, 'alert');
        this.props.addToCart(product);
    }

    openQuickView = (product) => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal,
            product: product
        }, 'quickview');
    }

    removeVietnameseTones(str) {
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .split(' ').join('-');
    }

    format_curency = ((money) => {
        money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    showProductItem = (products, textFilter) => {
        if (products.length > 0) {
            var productsTmp;
            textFilter === '' ? productsTmp = products : productsTmp = products.filter(product => {
                return product.category === 'giay'
            })
            return (
                productsTmp.slice(0, 8).map((item, index) => {
                    var name = this.removeVietnameseTones(item.name);
                    var price = this.format_curency(item.price);
                    return (
                        <div className="col-lg-3 col-md-3 col-sm-6 col-no-padding" key={index}>
                            <div className="products__item">
                                <div className="products__item--img">
                                    <Link to={`products/${item.id}/${name}`}>
                                        <img src={item.img[0]} alt={item.img[0]} />
                                    </Link>
                                    <div className="products__item--actions">
                                        <div className="products__item--actions-cart">
                                            <button
                                                type="button"
                                                className="products__item--actions-link"
                                                onClick={() => this.openModalCart(item)}
                                            >
                                                <i className="fa fa-shopping-bag"></i>
                                            </button>
                                        </div>
                                        <div className="products__item--actions-detail">
                                            <Link to={`products/${item.id}/${name}`} className="products__item--actions-link">
                                                <i className="far fa-clone"></i>
                                            </Link>
                                        </div>
                                        <div className="products__item--actions-quick">
                                            <button 
                                                className="products__item--actions-link"
                                                onClick={() => this.openQuickView(item)}
                                            >
                                                <i className="fa fa-eye"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item--info">
                                    <h3 className="products__item--info-name">
                                        <Link to={`products/${item.id}/${name}`} className="products__item--info-link">
                                            {item.name}
                                        </Link>
                                    </h3>
                                    <p className="products__item--info-price">
                                        {price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        var { products, textFilter } = this.props;
        return (
            <>
                <div className="row products__list">
                    {this.showProductItem(products, textFilter)}
                </div>
                {/* <ModalCart hideModal={this.props.hideModal} />
                <ModalView hideModal={this.props.hideModal} /> */}
                <ModalRoot hideModal={this.props.hideModal} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.listProducts,
        ...state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListProduct: () => {
            dispatch(actions.fetchAllProductRequest())
        },
        hideModal: () => {
            dispatch(hideModal())
        },
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }))
        },
        addToCart: (product) => {
            dispatch(addToCart(product, 1, 35))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts);