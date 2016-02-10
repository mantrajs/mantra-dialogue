import React from 'react';

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

export default PostList;
