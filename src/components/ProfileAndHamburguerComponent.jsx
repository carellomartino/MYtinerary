import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../assets/Sprint 1 Tuesday/user.png";
import "../App.css";
import hamburguer from '../assets/Sprint 1 Tuesday/hamburguer.png'
// import ProfileModal from "./ProfileModal";

const ProfileAndHamburguerComponent = () => {
  return (
    <div className={"flex-separated"}>
      <img
        className={"user-img"}
        src={user}
        alt=""
        data-toggle="modal"
        data-target="#exampleModal"
      />
      <div className={"flexStart"}>
        <div
          className="modal left fade col-lg-3 col-md-3"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-side modal-top-left"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Mi Perfil
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Create Account
                </button>
                <br/>
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Log In
                </button>
              </div>
              <div className="modal-footer">
                
                
              </div>
            </div>
          </div>
        </div>
      </div>



      <img src={hamburguer} className={"hamburguerIcon"} alt=""/>
      {/* <div>{show && <ProfileModal />}</div>} */}
    </div>
  );
};

export default ProfileAndHamburguerComponent;
