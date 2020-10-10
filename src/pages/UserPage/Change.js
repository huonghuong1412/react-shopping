import React, { Component } from 'react';
import { decodeString } from '../../actions/HashString';
import AccountSideBar from '../../components/User/AccountSideBar';
import { showModal, hideModal } from '../../actions/ModalActions'
import { connect } from 'react-redux';
import ModalRoot from '../../components/Modal/ModalRoot';

class Change extends Component {

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if (JSON.stringify(user) === JSON.stringify({})) {
            this.props.history.push('/account/login');
        }
    }

    closeModal = () => {
        this.props.hideModal();
    }

    openModalChange = () => {
        this.props.showModal({
            open: true,
            closeModal: this.closeModal
        }, 'change');
    }


    render() {
        var user = sessionStorage.getItem('user') ? JSON.parse(decodeString(sessionStorage.getItem('user'))) : '';
        return (
            <div className="account__page pt-3 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="account__page--title">Thay đổi thông tin</h3>
                        </div>
                        <AccountSideBar />
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="account__info">
                                <h3 className="account__info--title">Thông tin tài khoản</h3>
                                <div className="user__info">
                                    <div id="address_tables">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="address_title">
                                                    <div className="row">
                                                        <div className="col-md-9 col-sm-9 col-xs-12">
                                                            <h3>{user.fullname}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button 
                                                    className="change-btn"
                                                    onClick={() => this.openModalChange()}
                                                >
                                                    Thay đổi thông tin
                                                </button>
                                            </div>
                                        </div>
                                        <div className="address_table">
                                            <div className="view_address">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                                        <p><b>Công ty:</b></p>
                                                    </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-6">
                                                        <p>{user.company}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                                        <p><b>Địa chỉ:</b></p>
                                                    </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-6">
                                                        <p>{user.address}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                                        <p><b>Số điện thoại:</b></p>
                                                    </div>
                                                    <div className="col-md-8 col-sm-6 col-xs-6 ">
                                                        <p>{user.phone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalRoot hideModal={this.props.hideModal} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(hideModal())
        },
        showModal: (modalProps, modalType) => {
            dispatch(showModal({ modalProps, modalType }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Change);
