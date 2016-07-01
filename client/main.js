import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'; 
import PostContainer from './components/post_container';

const App = () => {
  return(
    <div>
      <Header />
      <PostContainer />
    </div>
  );  
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});