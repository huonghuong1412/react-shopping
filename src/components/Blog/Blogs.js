import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/BlogActions'

class Blogs extends Component {

    componentDidMount() {
        this.props.getAllBlogs();
    }

    showListBlogs = (blogs) => {
        if (blogs.length > 0) {
            return blogs.map((item, index) => {
                return (
                    <div className="row news__content pt-5 pb-5" key={index}>
                        <div className="col-md-5 col-sm-12">
                            <div className="news__content--img">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <h2 className="news__content--title">
                                <Link to={`/blogs/news/${item.id}`} className="news__content--link">
                                    {item.title}
                                </Link>
                            </h2>
                            <div className="news__content--body">
                                <div className="news__content--heading">
                                    <span className="news__content--date">
                                        <i className="far fa-calendar"></i>
                                        {item.createDate}
                                    </span>
                                    <span className="news__content--author">
                                        {item.author}
                                    </span>
                                </div>
                                <div className="news__content--main">
                                    <p className="news__content--main-text">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <Link to={`/blogs/news/${item.id}`} className="btn-rb">
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        var { blogs } = this.props;
        return (
            <>
                <div className="col-12">
                    {this.showListBlogs(blogs)}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBlogs: () => {
            dispatch(actions.fetchAllBlogRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
