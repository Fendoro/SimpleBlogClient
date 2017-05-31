import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions/index";
import PostsShowComponent from "../components/post_show";

class PostsShow extends PostsShowComponent {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);