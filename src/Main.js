import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer/ProfileAndHamburguerContainer'
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent'
import CreateAccountComponent from './components/CreateAccountComponent/CreateAccountComponent';
import CityContainer from './containers/CityContainer/CityContainer';

function Main() {
  return (
    <div>
      <Route component={ProfileAndHamburguerContainer} />
      <div className="App">
        <Route component={NavbarComponent} />
        <Switch>
          <Route path='/index' component={HomeContainer} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/create-account' component={CreateAccountComponent}/>
          <Route path='/city/:id' component={CityContainer}/>
        </Switch>
        <Route component={FooterComponent} />
        <Redirect exact from="/" to="/index" />
      </div>
    </div>
  );
}

export default Main;
