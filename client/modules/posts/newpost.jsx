import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>Add New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button onClick={this.createPost.bind(this)}>Add New</button>
      </div>
    );
  }

  createPost() {
    console.log('this.props: ' + this.props.create);
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.create,
  clearErrors: actions.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
