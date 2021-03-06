import React from 'react';

// import Navheader from './navigation2.jsx';
import Navheader from './navheader.jsx';
import Subnav from './navheader2.jsx';

export default class extends React.Component {

  render() {
    return (
      <div>

        <Navheader>
          {this.props.links ? this.props.links() : ''}
        </Navheader>
        <Subnav>
          {this.props.links ? this.props.links() : ''}
        </Subnav>

        <div className="container">


            {this.props.content()}


        </div>

      </div>
    );
  }
}
