import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import moment from 'moment';
import RichEditor from '../components/RichEditor.jsx';

const PostList = ({posts}) => {
  return (
    <div className="bs-docs-section clearfix">
      <div className='postlist'>

        {posts.map(post => {
          console.log("post: " + JSON.stringify(post));
          const content = (post.content && post.content.length <= 200) ? post.content : post.content + '...';
          var author;
          if (post.author) {
            //author = Meteor.users.findOne(post.author).username;
            }
            else {
            author = 'Anonymous';
            };
          let rawContent = null;
          try {
            rawContent = JSON.parse(post.content)
            } catch (e) {
            }
          console.log("error parse " + (rawContent && "yes"))
          return(
          <div className="post-preview">
            <a href={`/post/${post._id}`}>
              <h2 className="post-title">
                {post.title}
              </h2>
            </a>
            <p className="post-meta">Posted by <a href="#">{author}</a> ({moment(post.createdAt).fromNow(false)}) </p>
          </div>
            )
          })}

      </div>
    </div>
  );
}

//<p>
//  {rawContent && <RichEditor rawContent={rawContent} readOnly="true"/>}
//</p>

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
