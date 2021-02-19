// importing dependencies and components
import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

// class based component
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  // rendering the list
  renderList() {
    // maping the posts from the props
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              {/* title and the body endpoints */}
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            {/* userHeader coponent with the header of the post, putting the user Id as a identifier for the header */}
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  // rendering the result
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// mapp the state to the props, not directly to the state
const mapStateToProps = state => {
  return { posts: state.posts };
};

// connect fuction with PostList
// we are calling the const function mapStatePosts
export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
