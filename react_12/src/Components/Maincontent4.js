import React from "react";
import btnproperty from "./img/btn_property.png";

export default function Maincontent4() {
  return (
    <div className="container my-container-4">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p className="my-container-4-p1">Our trending latest proparty</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src={btnproperty} alt="Property Image" />
          <button className="btn btn-primary mx-3" type="submit">
            See All Property
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p className="my-container-4-p3">
            Our unique process gives you peace of mind from home rent to
            services
          </p>
        </div>
      </div>
    </div>
  );
}
