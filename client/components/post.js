import React, { Component } from 'react';
import { Card, CardText} from 'material-ui/Card';

const Post = ({post}) => {
  const { content } = post;
  return (
    <div className="post-container">
      <Card>
        <CardText>
          {content}
        </CardText>
      </Card>
    </div>
  );
}

export default Post;