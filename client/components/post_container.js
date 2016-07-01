import React, { Component } from 'react';

import Posts from './posts';
import NewPost from './new_post';

class PostContainer extends Component {
  render() {
    return(
      <main>
        <NewPost />
        <Posts />
      </main>
    );
  }
}

export default PostContainer;