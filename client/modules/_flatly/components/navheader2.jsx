import React from 'react';

import authComposer from '../../_users/composers/account/auth.jsx';
import _userControls from './userControls.jsx';
import AppConfig from '/client/configs/app.js';

const UserControls = authComposer(_userControls);

export default React.createClass({

  render() {

    return (

      <header className="main-header">
        <div className="navbar navbar-default navbar-static-top">

          <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle"
                data-toggle="collapse" data-target=".navbar-inverse-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">sub-nav</a>
            </div>


            <div className="navbar-collapse collapse navbar-inverse-collapse">

            </div>


          </div>

        </div>
      </header>

    );
  }
});
