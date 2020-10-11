import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions'
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: '',
            password: '',
            fullname: '',
            address: '',
            company: '',
            phone: ''
        }
    }

    componentDidMount() {
        var id = sessionStorage.getItem('user') ? JSON.parse((sessionStorage.getItem('user'))).id : '';
        this.props.getAccountEdit(id)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.userEdit) {
            this.setState({
                id: nextProps.userEdit.id,
                email: nextProps.userEdit.email,
                fullname: nextProps.userEdit.fullname,
                address: nextProps.userEdit.address,
                company: nextProps.userEdit.company,
                phone: nextProps.userEdit.phone,
            })
        }
    }

    closeModal = () => {
        this.props.hideModal();
    }

    handleSubmit = () => {
        var { id, email, password, fullname, address, company, phone } = this.state;
        var account = {
            id,
            email,
            password,
            fullname,
            address,
            company,
            phone
        }
        if (email === "" || fullname === "" || address === "" || company === "" || password === "") {
            alert("Không được để trống dữ liệu!")
        } else {
            this.props.changeAccount(account);
            sessionStorage.setItem('user', (JSON.stringify(this.state)))
            alert("Thay đổi thông tin thành công!");
            // window.location.href = "/account/change"
            this.closeModal()
        }
    }

    render() {
        var { email, fullname, address, company, phone } = this.state;
        return (
            <>
                <Modal.Header>
                    <Modal.Title>
                        Thay đổi thông tin tài khoản
                    </Modal.Title>
                    <button
                        type="button"
                        className="close-header"
                        onClick={this.closeModal}
                    >
                        <i className="fa fa-times mr-3"></i>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="customer-login pb-5">
                        <div clas="customer_login">
                            <div className="large_form">
                                <label htmlFor="customer_email" className="icon-field">
                                    <i className="fa fa-envelope icon-login"></i>
                                </label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    id="customer_email"
                                    placeholder="Email"
                                    className="customer_input"
                                    onChange={(e) => this.setState({
                                        email: e.target.value
                                    })}
                                />
                            </div>
                            <div className="large_form">
                                <label htmlFor="customer_password" className="icon-field">
                                    <i className="fas fa-shield-alt icon-login"></i>
                                </label>
                                <input
                                    required
                                    type="password"
                                    name=""
                                    id="customer_password"
                                    placeholder="Mật khẩu"
                                    className="customer_input"
                                    size="16"
                                    onChange={(e) => this.setState({
                                        password: (e.target.value)
                                    })}
                                />
                            </div>
                            <div className="large_form">
                                <label htmlFor="customer_fullname" className="icon-field">
                                    <i className="fa fa-envelope icon-login"></i>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="fullname"
                                    value={fullname}
                                    id="customer_fullname"
                                    placeholder="Họ tên"
                                    className="customer_input"
                                    onChange={(e) => this.setState({
                                        fullname: e.target.value
                                    })}
                                />
                            </div>
                            <div className="large_form">
                                <label htmlFor="customer_address" className="icon-field">
                                    <i className="fa fa-envelope icon-login"></i>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="address"
                                    value={address}
                                    id="customer_address"
                                    placeholder="Địa chỉ"
                                    className="customer_input"
                                    onChange={(e) => this.setState({
                                        address: e.target.value
                                    })}
                                />
                            </div>
                            <div className="large_form">
                                <label htmlFor="customer_company" className="icon-field">
                                    <i className="fa fa-envelope icon-login"></i>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="company"
                                    value={company}
                                    id="customer_company"
                                    placeholder="Công ty"
                                    className="customer_input"
                                    onChange={(e) => this.setState({
                                        company: e.target.value
                                    })}
                                />
                            </div>
                            <div className="large_form">
                                <label htmlFor="customer_phone" className="icon-field">
                                    <i className="fa fa-envelope icon-login"></i>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    id="customer_phone"
                                    placeholder="Số điện thoại"
                                    className="customer_input"
                                    onChange={(e) => this.setState({
                                        phone: e.target.value
                                    })}
                                />
                            </div>
                            <div className="action_bottom">
                                <button
                                    className="btn btn-signin"
                                    onClick={this.handleSubmit}
                                >Thay đổi</button>
                            </div>
                        </div>
                    </div >
                </Modal.Body>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.modal,
        userEdit: state.userEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccountEdit: (id) => {
            dispatch(actions.fetchChangeInfoGet(id))
        },
        changeAccount: (account) => {
            dispatch(actions.fetchChangeInfoRequest(account));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
