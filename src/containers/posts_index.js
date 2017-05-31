import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import PostsIndexComponent from "../components/posts_index";

class PostsIndex extends PostsIndexComponent {
    componentWillMount() {
        this.props.fetchPosts();
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);