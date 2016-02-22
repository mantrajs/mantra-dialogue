import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

const PostList = ({posts}) => (
  <div className="bs-docs-section clearfix">
    <div className='postlist'>
      <table className="table table-striped table-hover ">
        <thead>
        <tr>
          <th>Title</th>
          <th>Column heading</th>
          <th>Column heading</th>
        </tr>
        </thead>
        <tbody>
        {posts.map(post => (
          <tr key={post._id}>
            <td><a href={`/post/${post._id}`}>{post.title}</a></td>
          </tr>
        ))}
        </tbody>
      </table>
      <ul>
      </ul>
    </div>
  </div>
);

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
