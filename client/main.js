import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/header'; 
import PostContainer from './components/post_container';
import { Posts } from '../imports/collections/posts';

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
        <PostContainer />
      </div>
    </MuiThemeProvider>
  );  
}
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});