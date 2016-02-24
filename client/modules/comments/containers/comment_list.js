import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/comment_list.jsx';

export const composer = ({context, clearErrors, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const options = {
      sort: {createdAt: -1}
    };
    const comments = Collections.Comments.find({postId}, options).fetch();
    onData(null, {comments});
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  like: actions.comments.like,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
