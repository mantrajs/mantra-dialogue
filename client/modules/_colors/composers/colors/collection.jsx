import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';

export const collectionComposer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('_colors.list').ready()) {
    const collection = Collections._colors.find().fetch();
    onData(null, {collection});
  }
};

export default (component) => composeAll(
    composeWithTracker(collectionComposer),
    useDeps()
  )(component);
