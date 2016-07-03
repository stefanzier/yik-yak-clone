import React, { Component } from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disabledUpvote: false,
      disabledDownvote: false
    }

    this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
    this.handleDownvoteClicked = this.handleDownvoteClicked.bind(this);
  }

  handleUpvoteClicked() {
    if (!this.state.disabledUpvote) {
      this.setState({
        disabledUpvote: true,
        disabledDownvote: false
      });
    }
  }
  
  handleDownvoteClicked() {
    if (!this.state.disabledDownvote) {
      this.setState({
        disabledUpvote: false,
        disabledDownvote: true
      });
    }
  }

  render() {
    const { content, createdAt, votes } = this.props.post;

    return (
      <div className="post-container">
        <Card>
          <CardText>
            <p className="timestamp">
              {moment(createdAt).fromNow()}
            </p>
            {content}
            <div style={{ textAlign: "right" }}>
              <FlatButton 
                label="Upvote" 
                primary={true} 
                disabled={this.state.disabledUpvote}
                onClick={this.handleUpvoteClicked} />
              <FlatButton 
                label="Downvote" 
                secondary={true}
                disabled={this.state.disabledDownvote}
                onClick={this.handleDownvoteClicked} />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Post;