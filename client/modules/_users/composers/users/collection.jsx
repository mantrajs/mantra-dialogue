// import Component from '../components/Users/UsersCollection.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  if (Meteor.subscribe('users.collection').ready()) {
    const collection = Meteor.users.find().fetch();
    onData(null, {collection});
  }
};

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps()
  )(component);
