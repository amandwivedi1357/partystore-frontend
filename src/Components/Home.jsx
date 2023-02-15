import React, { Component } from "react";
import "./Home.css"

export const Home = () => {

  return (
    <div id="homepage-main-wrapper">
      {/* welcome to party store section starts here */}

      <div id="home-welcome-section-wrapper">
        <div id="home-welcome-section-partystore-heading">
          <span>The</span> <span>Party</span> <span>store</span>
        </div>
        <div id="home-welcome-section-content-wrap">
          <div className="home-welcome-section-content-sub-wrap">
            <div className="home-welcome-section-content-image-wrap">
              <img
                src="./partystore.jpg"
                alt=""
                className="home-welcome-section-content-image"
              />
            </div>
            <div className="home-welcome-section-content-heading">
              Theme party supplies
            </div>
            <div className="home-welcome-section-content-description">
              Birthday, anniversary and many more themes
            </div>
          </div>

          <div className="home-welcome-section-content-sub-wrap">
            <div className="home-welcome-section-content-image-wrap">
              <img
                src="./partystore.jpg"
                alt=""
                className="home-welcome-section-content-image"
              />
            </div>
            <div className="home-welcome-section-content-heading">Packages</div>
            <div className="home-welcome-section-content-description">
              Curated packages based on your requirement
            </div>
          </div>

          <div className="home-welcome-section-content-sub-wrap">
            <div className="home-welcome-section-content-image-wrap">
              <img
                src="./partystore.jpg"
                alt=""
                className="home-welcome-section-content-image"
              />
            </div>
            <div className="home-welcome-section-content-heading">
              Tableware
            </div>
            <div className="home-welcome-section-content-description">
              Get all cutlery for your party
            </div>
          </div>
        </div>
      </div>

      {/* welcome to party store section ends here */}
    </div>
  );
};
