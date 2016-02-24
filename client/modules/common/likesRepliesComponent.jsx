import React from 'react';

class LikesReplies extends React.Component {

  render() {
    const {post} = this.props;
    return (
      <div>
      <a href="#" onClick={this.likePost.bind(this)}>like</a> ({post.likeCount})
      </div>
    );
  }

  likePost() {
    const {like, post} = this.props;
    //console.log("like " + actions)
    like(post._id);
  }

}

export default LikesReplies;
