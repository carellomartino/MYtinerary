import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer/ProfileAndHamburguerContainer'
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent'
import CreateAccountComponent from './components/CreateAccountComponent/CreateAccountComponent';
import CityComponent from './components/CityComponent/CityComponent';

function Main() {
  return (
    <div>
      <Route component={ProfileAndHamburguerContainer} />
      <div className="App">
        <Route component={NavbarComponent} />
        <Switch>
          <Route path='/index' component={HomeComponent} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/create-account' component={CreateAccountComponent}/>
          <Route path='/city' component={CityComponent}/>
        </Switch>
        <Route path='/index' component={FooterComponent} />
        <Redirect exact from="/" to="/index" />
      </div>
    </div>
  );
}

export default Main;
