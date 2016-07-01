import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class NewPost extends Component {
  render() {
    return (
      <div className="new-post-container">
        <Card>
          <div className="text-field-container">
            <TextField
            hintText="What's on your mind?"
            floatingLabelText="Write a new post"
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default NewPost;