import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllOrders, getUserLogin } from '../../actions/UserActions';
import './index.css'
class OrderDetail extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user') ? JSON.parse((sessionStorage.getItem('user'))) : {};
        this.props.getUser(user);
        this.props.getAllOrder();
    }

    format_curency = ((money) => {
        money = (money + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    showOrderItem = (orders) => {
        if (orders.length > 0) {
            return orders.map((item, index) => {
                var category = "";
                switch(item.category){
                    case 'ao-khoac':
                        category = "Áo khoác";
                        break;
                    case 'ao':
                        category = "Áo";
                        break;
                    case 'quan':
                        category = "Quần";
                        break;
                    case 'vay-dam':
                        category = "Váy đầm";
                        break;
                    case 'bo-mac-nha':
                        category = "Bộ mặc nhà";
                        break;
                    case 'giay':
                        category = "Giày";
                        break;
                    case 'tui-xach':
                        category = "Túi xách";
                        break;
                    default:
                        category = "Sản phẩm"
                        break;
                }
                return (
                    <tr key={index}>
                        <th style={{ border: "1px solid #000" }}>{item.name}</th>
                        <th style={{ border: "1px solid #000" }}>{category}</th>
                        <th style={{ border: "1px solid #000" }}>{this.format_curency(item.price)}</th>
                        <th style={{ border: "1px solid #000" }}>{(item.quantity)}</th>
                    </tr>
                )
            })
        }
    }

    showOrderHistory = (orders) => {
        if (orders.length > 0) {
            return orders.map((item, index) => {
                return (
                    <div className="order-item pb-5" key={index}>
                        <p><strong>Ngày đặt hàng:</strong> <span>{item.date}</span> </p>
                        <p><strong>Tổng tiền đơn hàng:</strong> <span>{item ? this.format_curency(item.totalPrice) : 0}</span> </p>
                        <div className="table-responsive">
                            <table className="table order-table" style={{ border: "1px solid #e1e1e1" }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: "1px solid #000" }}>Tên Sản phẩm</th>
                                        <th style={{ border: "1px solid #000" }}>Loại Sản phẩm</th>
                                        <th style={{ border: "1px solid #000" }}>Giá tiền</th>
                                        <th style={{ border: "1px solid #000" }}>Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showOrderItem(item ? item.listOrder : [])}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        var { user, orders } = this.props;
        var orderByUser = [];
        for (var i = 0; i < orders.length; i++) {
            if (user.id === orders[i].idUser) {
                orderByUser.unshift(orders[i])
            }
        }
        // var lastOrder = orderByUser[orderByUser.length - 1];
        return (
            <div className="oder__detail--page pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="account__page--title">Thông tin đặt hàng</h3>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h3 className="order__page--title">Thông tin người nhận</h3>
                            <p>Họ tên: <span>{user.fullname}</span> </p>
                            <p>Địa chỉ nhận hàng: <span>{user.address}</span> </p>
                            <p>Số điện thoại: <span>{user.phone}</span> </p>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <h3 className="order__page--title">Lịch sử đặt hàng</h3>
                            {/* <p>Ngày đặt hàng: <span>{date}</span> </p>
                            <p>Tổng tiền đơn hàng: <span>{lastOrder ? this.format_curency(lastOrder.totalPrice) : 0}</span> </p>
                            <div className="table-responsive">
                                <table className="table product-table" style={{ borderBottom: "1px solid #e1e1e1" }}>
                                    <thead>
                                        <tr>
                                            <th>Tên Sản phẩm</th>
                                            <th>Giá tiền</th>
                                            <th>Số lượng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showOrderItem(lastOrder ? lastOrder.listOrder : [])}
                                    </tbody>
                                </table>
                            </div> */}
                            {this.showOrderHistory(orderByUser)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userLogin,
        orders: state.user.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (user) => {
            dispatch(getUserLogin(user))
        },
        getAllOrder: () => {
            dispatch(fetchAllOrders())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
