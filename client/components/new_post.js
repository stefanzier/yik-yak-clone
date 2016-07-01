import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import ReactDOM from 'react-dom';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      error: '', 
      open: false 
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('posts.insert', this.refs.textInput.getValue(), () => {
      if (this.refs.textInput.getValue() == '') {
        this.setState({ error: 'Please write a post' });
      } else {
        this.setState({ 
          error: '',
          open: true
        });
        document.querySelector('form').reset();
      }
    }); 
  }

  render() {
    return (
      <div className="new-post-container">
        <form className="new-post" onSubmit={this.handleSubmit.bind(this)} >
          <Card>
            <div className="text-field-container">
              <TextField
              hintText="What's on your mind?"
              floatingLabelText="Write a new post"
              ref="textInput"
              errorText={this.state.error}
              />
            </div>
          </Card>
        </form>
        <Snackbar
          open={this.state.open}
          message="Post added to the feed!"
          autoHideDuration={4000}
        />
      </div>
    );
  }
}

export default NewPost;