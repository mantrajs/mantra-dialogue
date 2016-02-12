import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import _ from 'lodash';

const composer = ({context}, onData) => {

  const {Meteor} = context();

  if (Meteor.subscribe('users.current').ready()) {
    // const loggedIn = Meteor.userId() ? true : false;
    // const loggedIn = Meteor.userId() === true;
    const loggedIn = Meteor.userId() || false;
    const user = Meteor.users.findOne(Meteor.userId());
    const email = _.get(user, 'emails[0].address', null);
    // const email = user.firstEmail();
    onData(null, {loggedIn, user, email});
  }

};

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps()
  )(component);
