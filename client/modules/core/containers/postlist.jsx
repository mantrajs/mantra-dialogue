import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import moment from 'moment';

const PostList = ({posts}) => {
  return (
    <div className="bs-docs-section clearfix">
      <div className='postlist'>

        {posts.map(post => {
          console.log("post: " + JSON.stringify(post));
          const content = (post.content.length <= 200) ? post.content : post.content + '...';
          const author = (post.author) ? post.author : 'Anonymous';
          return(
          <div className="post-preview">
            <a href={`/post/${post._id}`}>
              <h2 className="post-title">
                {post.title}
              </h2>
              <h3 className="post-subtitle">
                {content}
              </h3>
            </a>
            <p className="post-meta">Posted by <a href="#">{author}</a> ({moment(post.createdAt).fromNow(false)}) </p>
          </div>
            )
          })}

      </div>
    </div>
  );
}

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
