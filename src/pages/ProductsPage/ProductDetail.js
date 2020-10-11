import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/HomeActions'
import { showModal, hideModal } from '../../actions/ModalActions'
import { addToCart } from '../../actions/CartActions'
import BannerPage from '../../components/Banner/BannerPage';
import HomeProducts from '../../components/Products/HomeProducts';
import SideBar from '../../components/SideBar/SideBar'
import './index.css'
class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openImg: true,
            quantity: 1
        }
    }

    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        this.props.getProductDetail(id);
        this.props.getAllProducts();
        this.props.history.push(this.props.location.pathname)
    }

    closeModal = () => {
        this.props.hideModal();
    }

    openModalCart = (product, quantity) => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal
        }, 'alert');
        this.props.addToCart(product, quantity);
    }

    toggleImage = () => {
        this.setState({
            openImg: !this.state.openImg
        })
    }

    getImageName = () => this.state.openImg ? 'img0' : 'img1'

    handleBuyNow = (product, quantity) => {
        this.props.addToCart(product, quantity);
        this.props.history.push('/checkout')
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: parseInt(value)
        })
    }

    format_curency = ((money) => {
        money = (money + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    showListImage = (imgs) => {
        if (imgs.length > 0) {
            return imgs.map((item, index) => {
                return (
                    <p key={index} style={{ textAlign: "center" }}>
                        <img src={item} alt=""></img>
                    </p>
                )
            })
        }
    }

    handleShowImage = (src) => {
        return <img src={src} alt='' className="" />
    }

    render() {
        var productItem = this.props.productItem;
        var textFilter = productItem.name;
        var price = this.format_curency(productItem.price)
        const imagesPath = {
            img0: productItem.img ? productItem.img[0] : '',
            img1: productItem.img ? productItem.img[1] : ''
        }
        const imageName = this.getImageName();
        var { quantity } = this.state;
        return (
            <>
                <BannerPage textDetail={textFilter} />
                <div className="product__item--page">
                    <div className="container">
                        <div className="row">
                            <SideBar />
                            <div className="col-lg-9 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="product__item--image">
                                            <img src={imagesPath[imageName]} alt={productItem.name} className="" />
                                            <div className="slideproduct">
                                                <ul className="slides">
                                                    <li className={`slides-item ${!this.state.openImg ? 'active' : ''}`}>
                                                        <span onClick={
                                                            this.toggleImage
                                                        }>
                                                            <img src={productItem.img ? productItem.img[0] : ''} alt={productItem.name} />
                                                        </span>
                                                    </li>
                                                    <li className={`slides-item ${!this.state.openImg ? '' : 'active'}`}>
                                                        <span onClick={
                                                            this.toggleImage
                                                        }>
                                                            <img src={productItem.img ? productItem.img[1] : ''} alt={productItem.name} />
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="product__item--title">
                                            <h1>
                                                {productItem.name}
                                            </h1>
                                            <span>SKU: {productItem.sku}</span>
                                        </div>
                                        <div className="product__item--price">
                                            <span>
                                                {price}
                                            </span>
                                        </div>
                                        <div id="add-item-form" className="variants clearfix">
                                            <div className="select clearfix">
                                                <div className="selector-wrapper">
                                                    <label>{productItem.category === "tui-xach" ? "Màu sắc" : "Size"}</label>
                                                    <span className="custom-dropdown custom-dropdown--white">
                                                        <select className="single-option-selector custom-dropdown__select custom-dropdown__select--white" data-option="option1" id="product-select-option-0"><option value="XANH">XANH</option><option value="NÂU">NÂU</option></select></span></div><select id="product-select" name="id" style={{ display: 'none' }}>
                                                    <option value={1056587961}>XANH - 888,000₫</option>
                                                    <option value={1056587962}>NÂU - 888,000₫</option>
                                                </select>
                                            </div>
                                            <div className="selector-wrapper">
                                                <label>Số lượng</label>
                                                <input 
                                                    id="quantity" 
                                                    className="selector-wrapper-input" 
                                                    type="number" 
                                                    name="quantity" 
                                                    min={1}
                                                    value={this.state.quantity}
                                                    onChange = {this.handleChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                                    <button
                                                        id="add-to-cart"
                                                        className="btn-detail btn-color-add addtocart-modal"
                                                        name="add"
                                                        onClick={() => this.openModalCart(productItem, quantity)}
                                                    >Thêm vào giỏ</button>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                                    <button
                                                        id="buy-now"
                                                        className="btn-detail btn-color-buy"
                                                        onClick={() => this.handleBuyNow(productItem, quantity)}
                                                    >Mua ngay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="product__item--detail">
                                            <h3 className="product__item--detail-desc">MÔ TẢ SẢN PHẨM</h3>
                                            <div className="product__item--detail-wrapper">
                                                <p className="product__item--detail-name">{productItem.name}</p>
                                                <p className="product__item--detail-name">Chất liệu: {productItem.material}</p>
                                                <p className="product__item--detail-name">
                                                    Hình ảnh sản phẩm
                                                </p>
                                                {productItem.img ? this.showListImage(productItem.img) : []}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3 className="product__item--detail-desc pt-3 pb-3 mt-5">SẢN PHẨM KHÁC</h3>
                                        <div className="mt-5">
                                            <HomeProducts textFilter="random" target="_blank" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listProducts: state.listProducts,
        productItem: state.productItem,
        ...state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: (id) => {
            dispatch(actions.fetchProductDetailRequest(id))
        },
        getAllProducts: () => {
            dispatch(actions.fetchAllProductRequest())
        },
        hideModal: () => {
            dispatch(hideModal())
        },
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }))
        },
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity, 35))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
