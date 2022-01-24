import React from "react";
import mainContentImg from "./img/main_content_img.png";
import mc1 from "./img/mc_1.png";
import mc2 from "./img/mc_2.png";
import mc3 from "./img/mc_3.png";
import mc4 from "./img/mc_4.png";
import mc5 from "./img/mc_5.png";

export default function Maincontent() {
  return (
    <div className="container my-main-content-container">
      <div className="row my-main-content-container-row">
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <p className="my-main-content-container-row-f1">
            Search for Homes in your Neighborhood
          </p>
          <p className="my-main-content-container-row-f2">
            Online Estate Agency, the modern way to sell your own home. You can
            use griffin residential to market your property.
          </p>

          <div className="row py-2 px-2 my-main-content-container-row-f3">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <span>
                <b>Address</b> <br />
                587 Bridgeton Road
              </span>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <span>
                <b>City</b> <br />
                El Paso, Texas
              </span>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mt-3 mt-md-0 my-main-content-container-row-f4">
              <button className="btn btn-primary btn-lg" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 text-center mt-3 mt-md-0">
          <img
            src={mainContentImg}
            alt="Main Image Content"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row my-main-content-container-row-logo">
        
        <div className="col-sm-12 col-md-2 col-lg-2 text-center">
          <img
            src={mc1}
            alt="Main Image Content Logo 1"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 mt-4 mt-md-0 text-center">
          <img
            src={mc2}
            alt="Main Image Content Logo 2"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-4 mt-md-0 text-center">
          <img
            src={mc3}
            alt="Main Image Content Logo 3"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 mt-4 mt-md-0 text-center">
          <img
            src={mc4}
            alt="Main Image Content Logo 4"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 mt-4 mt-md-0 text-center">
          <img
            src={mc5}
            alt="Main Image Content Logo 5"
            className="img-fluid"
          />
        </div>
        
      </div>
    </div>
  );
}
