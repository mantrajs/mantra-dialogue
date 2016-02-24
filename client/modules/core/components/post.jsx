import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list.js';
import LikesReplies from '../../common/likesRepliesComponent.jsx'
//import linkify from 'linkify';
//import linkifyHtml from 'linkify/html';

class Post extends React.Component {

  render() {
    const {post} = this.props;
    return (
      <div><div>
      {post.saving ? <p>Saving...</p> : null}
      <h2>{post.title}</h2>
      <p>
        {post.content}
      </p>
        <LikesReplies {...this.props} />
      <div>
        <br/>
        <h4>Responses:</h4>
        <CommentList postId={post._id}/>
      </div>
    </div>
        <br/>
        <div>JSON: <pre>{JSON.stringify(post, null, 4)}</pre></div>
      </div>
    );
  }

  likePost() {
    const {like, post} = this.props;
    //console.log("like " + actions)
    like(post._id);
  }

}

export default Post;
