import React from 'react';
import CreateComment from '../containers/create_comment.js';
import moment from 'moment';
import LikesReplies from '../../common/likesRepliesComponent.jsx'

const CommentList = ({comments, postId, like}) => (
  <div className="comments">
    <div className="comment-list">
      {comments.length === 0 ? <p>No Comments Yet!</p> : null}
      {comments.map(comment => (
        <div key={comment._id} className="comment">
          <b>{comment.author} ({moment(comment.createdAt).fromNow(true)}):</b>
          <br/>
            {comment.text}
          {comment.saving ? '...' : null}
          <LikesReplies post={comment} like={like} />
          <br/>
        </div>
      ))}
    </div>
    <div>
      <CreateComment postId={postId}/>
    </div>
  </div>
);

//<div>JSON: <pre>{JSON.stringify(comment, null, 4)}</pre></div>

export default CommentList;
