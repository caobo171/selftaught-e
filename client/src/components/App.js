import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import TextTest from './texttest/TextTest';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
            <div>
              <Route exact path="/texttest" component={TextTest} />
            </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
