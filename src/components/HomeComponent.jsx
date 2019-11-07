import React from 'react';
import "../App.css";
import arrow from '../assets/Sprint 1 Tuesday/circled-right-2.png';
import barcelona from '../assets/Sprint 1 Tuesday/barcelona.jpg'
import newYork from '../assets/Sprint 1 Tuesday/newYork.jpg'
import amsterdam from '../assets/Sprint 1 Tuesday/amsterdam.jpg'
import paris from '../assets/Sprint 1 Tuesday/paris.png'
// import { Link } from 'react-router-dom'

const HomeComponent = props => {
    return (
        <div className={"App"}>
            <h2 className={"myFont"}>Find your perfect trip, designed by insiders who know and love their cities.</h2>
            <img className={"arrow"} src={arrow} alt=""/>
            <h2 className={"myFont lefty"}>Popular MYtinerarys</h2>
            <div className={"flexImg"}>
            
            
            
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

        <div className={"col-lg-12"}>
      <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
      <img className="col-lg-6 col-md-6 col-sm-6 images" src={paris} alt="Second slide"/>
      <img className="col-lg-6 col-md-6 col-sm-6 images" src={newYork} alt="Third slide"/>
      <img className="col-lg-6 col-md-6 col-sm-6 images" src={barcelona} alt="Third slide"/>

        </div>
    </div>
    <div className="carousel-item">
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    <img className="col-lg-6 col-md-6 col-sm-6 images" src={amsterdam} alt="First slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <img className={"images"} src={barcelona} alt=""/>
            <img className={"images"} src={newYork} alt=""/>
            <img className={"images"} src={amsterdam} alt=""/>
            <img className={"images"} src={paris} alt=""/> */}
            </div>
        </div>
    );
};

export default HomeComponent;