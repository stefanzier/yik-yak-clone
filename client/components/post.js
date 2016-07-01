import React, { Component } from 'react';
import { Card, CardText, CardHeader } from 'material-ui/Card';

const Post = ({post}) => {
  const { content, createdAt } = post;
  return (
    <div className="post-container">
      <Card>
        <CardText>
          {content}
          <p className="timestamp">
            {moment(createdAt).fromNow()}
          </p>
        </CardText>
      </Card>
    </div>
  );
}

export default Post;