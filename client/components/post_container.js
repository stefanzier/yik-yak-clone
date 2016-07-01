import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../../imports/collections/posts.js';

import Post from './post';
import NewPost from './new_post';

class PostContainer extends Component {
  render() {
    return(
      <main>
        <NewPost />
        <div className="">
          {this.props.posts.map((post) =>
            <Post key={post._id} post={post} /> )}
        </div>
      </main>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('posts');
  
  return { posts: Posts.find({}).fetch() };
}, PostContainer);