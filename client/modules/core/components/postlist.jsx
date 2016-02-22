import React from 'react';

const PostList = ({posts}) => (
  <div className="bs-docs-section clearfix">
  <div className='postlist'>

    {posts.map(post => (
      <div className="post-preview">
      <a href={`/post/${post._id}`}>
        <h2 className="post-title">
          {post.title}
        </h2>
        <h3 className="post-subtitle">
          {post.content}
        </h3>
      </a>
      <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
    </div>
      ))}

  </div>
  </div>
);

export default PostList;
