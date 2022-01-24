import React from "react";
import Logo from "./img/Logo.png";

export default function Maincontent8() {
  return (
    <div className="container my-content8">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p className="my-content8-p1">Popular Searches</p>
          <p className="my-content8-p2">Apartment for Rent</p>
          <p className="my-content8-p2">Apartment Low to hide</p>
          <p className="my-content8-p2">Offices for Buy</p>
          <p className="my-content8-p2">Offices for Rent</p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p className="my-content8-p1">About Us</p>
          <p className="my-content8-p2">Our Story</p>
          <p className="my-content8-p2">Team Members</p>
          <p className="my-content8-p2">Careers</p>
          <p className="my-content8-p2">Contact Us </p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p className="my-content8-p1">Quick links</p>
          <p className="my-content8-p2">Terms of Use</p>
          <p className="my-content8-p2">Privacy Policy</p>
          <p className="my-content8-p2">Contact Support</p>
          <p className="my-content8-p2">FAQs</p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p className="my-content8-p1">Support</p>
          <p className="my-content8-p2">Help Center</p>
          <p className="my-content8-p2">Loan Support</p>
          <p className="my-content8-p2">Managment</p>
          <p className="my-content8-p2">Privacy Policy</p>
        </div>
      </div>

      <div className="row my-container-row-2">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <img src={Logo} alt="Main Content Image" />
        </div>
        <div className="col-sm-0 col-md-6 col-lg-6"></div>
        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 mt-md-0">
          <p className="my-container-row-2-p">© 2021 Besnik. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
