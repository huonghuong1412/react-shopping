import React, { Component } from 'react';
import { connect } from 'react-redux';
import BannerPage from '../../components/Banner/BannerPage';
import * as actions from '../../actions/BlogActions'
import './index.css'
class BlogCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            urlimg: '',
            content: '',
            author: this.props.userLogin.fullname ? this.props.userLogin.fullname : ''
        }
    }

    componentDidMount() {
        var user = sessionStorage.getItem('user');
        if (JSON.stringify(user) === JSON.stringify({})) {
            this.props.history.push('/account/login');
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
            title: '',
            urlimg: '',
            content: ''
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var { title, content, urlimg, author } = this.state;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var date = dd + "/" + mm + "/" + yyyy;
        if(author === "") {
            alert("Mời nhập họ tên")
        } else if(title === "") {
            alert("Mời nhập tiêu đề blog")
        } else if(urlimg === "") {
            alert("Mời nhập đường dẫn ảnh")
        } else if(content === "") {
            alert("Mời nhập nội dung blog")
        } else {
            this.props.addBlog({
                title: title,
                description: content,
                img: urlimg,
                createDate: date,
                author: author
            });
            alert("Thêm blog thành công !")
            this.handleClearFrom();
            this.props.history.push("/blogs/news")
        }
    }


    render() {
        return (
            <>
                <BannerPage textBlog="Tạo mới blog" />
                <div className="blog__page--create pt-2 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="account__page--title">Tạo mới blog</h3>
                            </div>
                            <div className="col-12">
                                <h3>Blog</h3>
                                <hr className="line-left" />
                                <div className="contact-form">
                                    <input name="form_type" type="hidden" defaultValue="contact" />
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <div className="form-group">
                                        <label htmlFor="contactFormAuthor" className="sr-only">Họ tên</label>
                                        <input
                                            required
                                            type="text"
                                            id="contactFormAuthor"
                                            className="form-control input-lg"
                                            name="author"
                                            placeholder="Author"
                                            autoCapitalize="words"
                                            value={this.state.author}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormName" className="sr-only">Tiêu đề</label>
                                        <input
                                            required
                                            type="text"
                                            id="contactFormName"
                                            className="form-control input-lg"
                                            name="title"
                                            placeholder="Title"
                                            autoCapitalize="words"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">Hình ảnh</label>
                                        <input
                                            required
                                            type="text"
                                            name="urlimg"
                                            placeholder="Url image (hơi cùi ạ :v)"
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
                                            name="content"
                                            className="form-control"
                                            placeholder="Content"
                                            id="contactFormMessage"
                                            value={this.state.comment}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary btn-lg btn-rb"
                                        onClick={this.handleSubmit}
                                    >
                                        Thêm blog
                                </button>
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
        userLogin: state.userLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBlog: (blog) => {
            dispatch(actions.fetchCreateBlog(blog))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogCreate);
