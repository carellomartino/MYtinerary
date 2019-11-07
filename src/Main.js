import React from 'react';
import './App.css';
// import Component1 from './components/Component1'
// import MYtineraryProjectTeamContainer from './containers/MYtineraryProjectTeamContainer';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer/ProfileAndHamburguerContainer'

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
