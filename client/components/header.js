import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { FindInPage } from 'material-ui/svg-icons/action/find-in-page';

class Header extends Component {
  render() {
    return(
      <AppBar
        title="Yik Yak"
      /> 
   );
  }
}

export default Header;