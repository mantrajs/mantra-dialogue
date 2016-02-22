import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CommentList from '/client/modules/comments/containers/comment_list.js';

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

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('posts.single', postId, () => {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const postFromCache = Tracker.nonreactive(() => {
    return Collections.Posts.findOne(postId);
  });

  if (postFromCache) {
    onData(null, {post: postFromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Post);
