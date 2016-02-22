import React from 'react';
import CreateComment from '../containers/create_comment.js';
import moment from 'moment';

const CommentList = ({comments, postId}) => (
  <div className="comments">
    <div className="comment-list">
      {comments.length === 0 ? <p>No Comments Yet!</p> : null}
      {comments.map(comment => (
        <div key={comment._id} className="comment">
          <b>{comment.author} ({moment(comment.createdAt).fromNow(true)})</b>
          <p>
            {comment.text}
          {comment.saving ? '...' : null}
            </p>
        </div>
      ))}
    </div>
    <div>
      <CreateComment postId={postId}/>
    </div>
  </div>
);

export default CommentList;
