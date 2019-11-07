import React from 'react';
import './App.css';
// import Component1 from './components/Component1'
// import MYtineraryProjectTeamContainer from './containers/MYtineraryProjectTeamContainer';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer'

function Main() {
  return (
    <div className="App">
      <ProfileAndHamburguerContainer/>
      <NavbarComponent/>
      <HomeComponent/>
      <FooterComponent/>
    </div>
  );
}

export default Main;
