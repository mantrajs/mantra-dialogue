import React from 'react';

//import Navheader from '/client/_flatly/components/navheader.jsx';
import Navheader from './navheader.jsx';

export default class extends React.Component {

  render() {
    return (
      <div>

        <Navheader>
          <ul className="nav navbar-nav">
            <li><a href="/new-post">New Post</a></li>
          </ul>
        </Navheader>

        <div className="container">


            {this.props.content()}


        </div>

      </div>
    );
  }
}
