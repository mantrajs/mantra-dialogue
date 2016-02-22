import React from 'react';

class NewPost extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="new-post">
        <h2>New Post</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input style={{ padding: 0, margin: 0, width:'100%' }} ref="titleRef" type="Text" placeholder="Enter your post title." /> <br/>
        <textarea style={{ padding: 0, margin: 0, width:'100%' }} rows="7" ref="contentRef" placeholder="Enter your post content." /> <br/>
        <button onClick={this.createPost.bind(this)}>Add New</button>
      </div>
    );
  }

  createPost() {
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.value, contentRef.value);
  }
}

export default NewPost;
