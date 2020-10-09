import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ModalAlert extends Component {

    closeModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <>
                <Modal.Body>
                    <div className="notify pt-5 pb-5 d-flex 
                        justify-content-center align-items-center
                        flex-column
                        ">
                        <h3 className="notify-title mb-3">
                            {this.props.title}
                        </h3>
                        <div className="notify-button">
                            <Link to={this.props.redirect} className="btn btn-signin d-flex 
                        justify-content-center align-items-center">
                                <span>
                                    {this.props.message}
                                </span>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.modal,
    }
}


export default connect(mapStateToProps, null)(ModalAlert);
