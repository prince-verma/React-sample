import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import FlexBoxSample from "./components/flex-box-sample";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FlexBoxSample}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}


class NoMatch extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h3>404 Page not found.</h3>
      </div>
    );
  }
}


export default App;
