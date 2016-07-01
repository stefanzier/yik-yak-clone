import React from 'react';
import ReactDOM from 'react-dom';

// Components - Header

const App = () => {
  return(
    <div>
      <h1>Hello there!</h1>
    </div>
  );  
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});