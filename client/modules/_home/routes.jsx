import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from './components/links.jsx';
import Simple from './components/simple.jsx';
import Homepage from './components/homepageWrapper.jsx';

export default function (injectDeps, {FlowRouter}) {

  const LayoutCtx = injectDeps(Layout);
  // const LayoutCtx = injectDeps(context, actions)(Layout)

  FlowRouter.route('/about', {
    name: 'home',
    action() {
      mount(LayoutCtx, {
        content: () => (<Homepage />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(LayoutCtx, {
        content: () => (<Simple name='home container'/>),
        links: () => (<Links />)
      });
    }
  });


}
