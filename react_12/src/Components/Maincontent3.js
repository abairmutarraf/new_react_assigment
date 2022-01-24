import React from "react";
import home from "./img/home.png";
import rent from "./img/rent.png";
import neighbord from "./img/neighbord.png";

export default function Maincontent3() {
  return (
    <div className="container my-content3-logo-container">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="card my-card" style={{ width: "18rem" }}>
            <img
              src={home}
              className="card-img-top my-content3-logo-1 mx-auto "
              alt="Home Logo"
              style={{width : "122.5px", height : "94px"}}
            />
            <div className="card-body">
              <p className="card-title text-center my-content3-logo-p-1">
                Buy a Home
              </p>
              <p className="card-text text-center">
                With over 1 million+ homes for sale available on the website,
                Trulia can match you with a house.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="card my-card" style={{ width: "18rem" }}>
            <img
              src={rent}
              className="card-img-top my-content3-logo-1 mx-auto"
              alt="Rent Logo"
              style={{width : "122.5px", height : "94px"}}
            />
            <div className="card-body">
              <p className="card-title text-center my-content3-logo-p-1">
                Rent a home
              </p>
              <p className="card-text text-center">
                With 35+ filters and custom keyword search, Trulia can help you
                find a home.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="card my-card" style={{ width: "18rem" }}>
            <img
              src={neighbord}
              className="card-img-top my-content3-logo-3 mx-auto"
              alt="Neighbord Logo"
              style={{width : "122.5px", height : "94px"}}
            />
            <div className="card-body">
              <p className="card-title text-center my-content3-logo-p-1">
                See neighborhoods
              </p>
              <p className="card-text text-center">
                With more neighborhood insights than any other real estate
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
