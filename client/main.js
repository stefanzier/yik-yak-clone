import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/header'; 
import PostContainer from './components/post_container';

const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
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