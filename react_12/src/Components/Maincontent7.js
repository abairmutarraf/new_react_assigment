import React from "react";
import Searchbar from "./img/Searchbar.png";

export default function Maincontent7() {
  return (
    <div className="container-fluid my-container-7">
      <div className="container my-container-7-1">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="my-container-7-1-p-1">Talk to a Redfin Agent</p>
            <p className="my-container-7-1-p-2">
              Start your search with an expert local agent—there’s no pressure
              or obligation.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
            <p className="my-container-7-1-p-3">
              Where are you searching for homes?
            </p>
            <img src={Searchbar} alt="Search Bar" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
