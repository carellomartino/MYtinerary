import React, { Component } from 'react'
import myImages from '../myImages';
import './Container.css';

export default class Container extends Component {
    render() {
      return (
        <div className="container">
          <img className="itineraryLogo" src={myImages.logo}></img>
          <p className="textItinerary">Find your perfect trip, designed by insiders who know and love their cities</p>
  
          <div className="circleContainer">
          <p className="textCircle">Start Brownsing</p>
          <img className="circleImg" src={myImages.circleIcon}></img>
          </div>
          
          <div className="loginContainer">
          <p className="textLogin">Want to build your own MYtinerary?</p>
          <div className="row justify-content-around">
          <a href="#">Log In</a>
          <a href="#">Create User</a>
          </div>
          </div>
          <img className="homeLogo" src={myImages.homeLogo}></img>
        </div>
      );
    }
  }