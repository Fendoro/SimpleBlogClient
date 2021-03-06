import React, { Component } from "react";
import { Link } from "react-router";

export default class PostsIndex extends Component {
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">
                            {post.categories}
                        </span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}