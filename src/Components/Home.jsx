import React, { Component } from "react";
import "./Home.css"

export const Home = () => {

  return (
    <div id="homepage-main-wrapper">
      {/* welcome to party store section starts here */}

      <div id="home-welcome-section-wrapper">
        <div id="home-welcome-section-welcome-to-heading">WELCOME TO</div>
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

      {/* make your party more fun section starts here */}

      <div id="home-explore-section-main-wrap">
        <div id="home-explore-section-video-wrap">
          <img src="./explore.jpg" alt="" />
        </div>

        <div id="home-explore-section-content-wrap">
          <div id="home-explore-section-content-sub-wrap">
            <span>Make</span> <span>your</span> <span>party</span>{" "}
            <span>more fun</span>
          </div>
          <div id="home-explore-section-content-description">
            Explore all our party photos andtheme setups
          </div>
          <div id="home-explore-section-content-button-wrap">
            <button id="home-explore-section-content-button">Explore</button>
          </div>
        </div>
      </div>
      {/*  products and packages section starts here  */}
      <div id="home-products-and-packages-wrapper">
        <div id="home-products-and-packages-take-a-look-at-heading">
          TAKE A LOOK AT
        </div>
        <div id="home-products-and-packages-heading">
          <span>Our</span> <span>Products &</span> <span>Packages</span>
        </div>

        <div id="home-products-and-packages-sub-heading">
          <div>All products</div>
          <div className="home-products-and-packages-sub-heading-logo-wrap">
            <div className="home-products-and-packages-sub-heading-logos">
              <img src="./birthday.jpg" alt="" />
            </div>
            <div>Birthday supplies</div>
          </div>
          <div className="home-products-and-packages-sub-heading-logo-wrap">
            <div className="home-products-and-packages-sub-heading-logos">
              <img src="./anniversary.jpg" alt="" />
            </div>
            <div>Anniversary supplies</div>
          </div>
          <div className="home-products-and-packages-sub-heading-logo-wrap">
            <div className="home-products-and-packages-sub-heading-logos">
              <img src="./valentine.jpg" alt="" />
            </div>
            <div>Valentine's day supplies</div>
          </div>
        </div>

        <div id="home-products-and-packages-content-grid-wrap">
          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              Balloons
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Solid color, Chrome, striped and many more
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              Cake decorations
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Cake toppers, candles and many more
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              Christmas decorations
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Tree decorations, reindeer figurines and many more
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              Paper decorations
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Paper ribbons, paper flowers and many more
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              Banners
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Birthday banners, Anniversary banners and many more
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              Foil themes
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Description
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div className="home-products-and-packages-content-grid-titles">
              LED decorations
            </div>
            <div className="home-products-and-packages-content-grid-description">
              Led lights, diyas and many more
            </div>
          </div>

          <div className="home-products-and-packages-content-grid">
            <div className="home-products-and-packages-content-grid-image-wrap">
              <img src="./partystore.jpg" alt="" />
            </div>
            <div>Gift packing</div>
            <div className="home-products-and-packages-content-grid-description">
              Gift wrappers, color ribbonsand many more
            </div>
          </div>
        </div>
      </div>
      {/*  products and packages section ends here  */}
    </div>
  );
};
