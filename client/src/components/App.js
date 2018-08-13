import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import axios from 'axios';


import Heading from './Heading';
import LandingPage from './LandingPage';
import TextTest from '../components/texttest/TextTest';
import Footer from './FooterComp';
import TestPlace from './TestPlace';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Game from './game/Game';
import TextTestDisplay from './texttest/texttest_individual/TextTestDisplay'
import TextTestEditForm from './texttest/TextTestEditForm';



 window.axios = axios;
class App extends Component {
  componentDidMount(){
    this.props.fetchAuth();
  }
  render() {
    
    return (
      <div className="App">
         <BrowserRouter>
            <div>
              <Heading/>
              <br/>
              <Route exact path="/texttest" component={TextTest} />
              <Route exact={true} path="/" component={LandingPage} />
              <Route exact={true} path="/testplace" component = {TestPlace}/>
              <Route exact={true} path="/profile/:idUser" component =  {Profile}/>
              <Route exact={true} path="/dashboard" component ={Dashboard} />
              <Route exact={true} path='/game' component={Game} />
              <Route exact={true} path='/texttest/:_id' component={TextTestDisplay}/>
              <Route exact={true} path='/texttest/edit/:_id' component={TextTestEditForm}/>
              <Footer/>
            </div>
            
         </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,userActions)(App);
