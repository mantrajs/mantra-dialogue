import React from 'react';
import ReactDOM from 'react-dom';
//import {Editor, EditorState} from 'draft-js';
import RichEditor from './RichEditor.jsx';

class NewPost extends React.Component {

  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input style={{ padding: 0, margin: 0, width:'100%' }} ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <RichEditor ref="contentRef" /> <br/>

        <button onClick={this.createPost.bind(this)}>Add New</button>
      </div>
    );
  }

  createPost() {
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    const rawState = contentRef.getRawState();
    console.log("raw: " + JSON.stringify(rawState))

    create(titleRef.value, JSON.stringify(rawState));
  }
}

export default NewPost;
