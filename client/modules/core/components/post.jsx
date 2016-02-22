import React from 'react';
import CommentList from '/client/modules/comments/containers/comment_list.js';
//import linkify from 'linkify';
//import linkifyHtml from 'linkify/html';

const Post = ({post}) => (
  <div>
    {post.saving ? <p>Saving...</p> : null}
    <h2>{post.title}</h2>
    <p>
      {post.content}
    </p>
    <div>
      <h4>Comments</h4>
      <CommentList postId={post._id}/>
    </div>
  </div>
);

//{linkifyHtml(post.content, {
//  defaultProtocol: 'https'
//})}

export default Post;
