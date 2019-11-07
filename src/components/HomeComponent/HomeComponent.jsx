import React from "react";
import "./HomeComponentStyle.css";
import arrow from "./images/circled-right-2.png";
import barcelona from "./images/barcelona.jpg";
import newYork from "./images/newYork.jpg";
import amsterdam from "./images/amsterdam.jpg";
import paris from "./images/paris.jpg";
import buenosAires from "./images/buenosAires.jpg";
import caracas from "./images/caracas.jpg";
import mexico from "./images/mexico.jpg";
import montevideo from "./images/montevideo.jpg";
import rio from "./images/rio.jpg";
import roma from "./images/roma.jpg";
import tokyo from "./images/tokyo.jpg";
import athens from "./images/athens.jpg";
// import { Link } from 'react-router-dom'

const HomeComponent = props => {
  return (
    <div className={"App"}>
      <h2 className={"myFont"}>
        Find your perfect trip, designed by insiders who know and love their
        cities.
      </h2>
      <img className={"arrow"} src={arrow} alt="" />
      <h2 className={"myFont lefty"}>Popular MYtinerarys</h2>
      <div className={"flexImg"}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={amsterdam}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={paris}
                alt="Second slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={newYork}
                alt="Third slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={barcelona}
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={buenosAires}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={caracas}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={mexico}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={montevideo}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={athens}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={tokyo}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={roma}
                alt="First slide"
              />
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={rio}
                alt="First slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
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
