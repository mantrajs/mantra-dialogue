import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/dialogue_theme.jsx';
import Links from '../_home/components/links.jsx';

// import MainLayout from './components/main_layout.jsx';
import PostList from './containers/postlist.jsx';
import Post from './containers/post';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/table', {
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
