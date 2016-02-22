import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../_home/components/links.jsx';

// import MainLayout from './components/main_layout.jsx';
import PostList from './postlist.jsx';
import Post from './post.jsx';
import NewPost from './newpost.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/posts', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>),
        links: () => (<Links />)
      });
    }
  });
}
