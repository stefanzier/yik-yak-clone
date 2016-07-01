import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'posts.insert': function(content) {
    if (content != '') {
      Posts.insert({ content, createdAt: new Date() });
    }
  }
});

export const Posts = new Mongo.Collection('posts');