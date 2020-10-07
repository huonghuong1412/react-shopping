import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/CommentAction'
import './index.css'
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            comment: ''
        }
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    handleClearFrom = () => {
        this.setState({
            name: '',
            email: '',
            comment: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendComment(this.state);
        alert("Gửi liên hệ thành công !")
        this.handleClearFrom();
    }

    render() {
        return (
            <section className="contact__page pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Viết nhận xét</h3>
                            <hr className="line-left" />
                            <p>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho Kisuhi, Kisuhi sẽ liên lạc lại với bạn sớm nhất có thể.</p>
                            <div className="contact-form">
                                <input name="form_type" type="hidden" defaultValue="contact" />
                                <input name="utf8" type="hidden" defaultValue="✓" />
                                <div className="form-group">
                                    <label htmlFor="contactFormName" className="sr-only">Tên</label>
                                    <input
                                        required
                                        type="text"
                                        id="contactFormName"
                                        className="form-control input-lg"
                                        name="name"
                                        placeholder="Tên của bạn"
                                        autoCapitalize="words"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactFormEmail" className="sr-only">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Email của bạn"
                                        id="contactFormEmail"
                                        className="form-control input-lg"
                                        autoCorrect="off" autoCapitalize="off"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactFormMessage" className="sr-only">Nội dung</label>
                                    <textarea
                                        required
                                        rows={6}
                                        name="comment"
                                        className="form-control"
                                        placeholder="Viết bình luận"
                                        id="contactFormMessage"
                                        value={this.state.comment}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button
                                    className="btn btn-primary btn-lg btn-rb"
                                    onClick = {this.handleSubmit}
                                >
                                    Gửi liên hệ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendComment: (comment) => {
            dispatch(actions.sendCommentRequest(comment))
        }
    }
}

export default connect(null, mapDispatchToProps)(Contact);
