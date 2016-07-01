import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('posts.insert', this.refs.textInput.getValue(), (error) => {
      if (error) {
        this.setState({ error: 'Unable to publish post' });
      } else {
        this.setState({ error: '' });
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
              />
            </div>
          </Card>
        </form>
      </div>
    );
  }
}

export default NewPost;