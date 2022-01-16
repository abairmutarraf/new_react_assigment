import "./style.css";
import logo from "./assets/logo.png";
import Shape1 from "./assets/Shape1.png";
import Shape2 from "./assets/Shape2.png";
import Shape3 from "./assets/Shape3.png";
import Shape4 from "./assets/Shape4.png";
import Shape5 from "./assets/Shape5.png";
import Shape6 from "./assets/Shape6.png";
import chef1 from "./assets/chef-1.png";
import chef2 from "./assets/chef-2.jpg";
import chef3 from "./assets/chef-3.png";
import burger from "./assets/burger.png";
import bicon from "./assets/bicon.png";
import "../node_modules/font-awesome/css/font-awesome.min.css";
function App() {
  return (
    <div>
      <div className="container-fluid backgroundimage">
        <div className="row navgrad">
          <nav className="navbar navbar-expand-lg navbar-light  ">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                style={{ width: "80px", height: "80px" }}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                <li className="nav-item lipadding">
                  <a className="nav-link " href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item lipadding">
                  <a className="nav-link " href="#">
                    PRODUCT
                  </a>
                </li>
                <li className="nav-item lipadding">
                  <a className="nav-link " href="#">
                    PROMO
                  </a>
                </li>
                <li className="nav-item lipadding">
                  <a className="nav-link " href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item lipadding">
                  <a className="nav-link " href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <div className="col-md-6 col-sm-8 col-lg-6">
              <p className="maintext">
                {" "}
                Get Cashback
                <br /> up to 50%
              </p>
              <p className="maintextp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse consectetur justo eu nunc consequat.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <button className="orderbtn"> Order Now </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ourchefarea">
        <div className="row">
          <div className="col-md-2 col-sm-12 col-lg-2">
            <img src={Shape1} className="ourchefshape1" alt="" />
          </div>

          <div className="col-md-8 col-sm-12 col-lg-8">
            <p className="ourchefheading">Our Chef</p>
            <p className="ourchefp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Vivamus lacinia odio vitae vestibulum vestibulum.{" "}
            </p>
          </div>
          <div className="col-md-2 col-sm-12 col-lg-2">
            <img src={Shape2} className="ourchefshape2" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-12 col-lg-2">
            <img src={Shape3} alt="" className="ourchefshape3" />
          </div>
          <div className="col-sm-12 col-lg-8">
            <div className="row ">
              <div className=" col-sm-12 col-lg-4 text-center">
                <img src={chef1} alt="" className="ourchef1" />
                <p className="ourchef1heading">Aiden Hunter</p>
                <p className="ourchefpara">Founder</p>
              </div>
              <div className=" col-sm-12 col-lg-4 text-center">
                <img src={chef2} alt="" className="ourchef1" />
                <p className="ourchef1heading">Ethel Ramsey</p>
                <p className="ourchefpara">Co-Founder</p>
              </div>
              <div className=" col-sm-12 col-lg-4 text-center">
                <img src={chef3} alt="" className="ourchef1" />
                <p className="ourchef1heading">Fannie Stewart</p>
                <p className="ourchefpara">Co-Founder</p>
              </div>
            </div>
          </div>

          <div className=" col-sm-12 col-lg-2 d-flex align-items-end">
            <img src={Shape4} alt="" className="ourchefshape4" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4 text-end">
            <img src={Shape5} alt="" className="ourchefshape5" />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <img src={Shape6} alt="" className="ourchefshape6" />
          </div>
        </div>
      </div>
      {/* best burger */}
      <div className="container-fluid bestburgerarea">
        <div className="row">
          <div className="col-lg-6 text-end mt-5">
            <div className="bestburgerimgcenter">
              <img src={burger} alt="" className="bestburgerimg " />
            </div>
          </div>

          <div className="col-lg-6 text-start  mt-5">
            <p className="bestburgerp mt-5 ml-5">Best Burger</p>
            <p className="bestburgerp2  ml-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.{" "}
            </p>
            <div className="orderbtn1center">
              <button className="orderbtn1 ml-5 mt-5"> Order Now </button>
            </div>
          </div>
        </div>
      </div>
      {/* best burger */}
      {/* <!-- Big Burger --> */}
      <div className=" container-fluid bigburderarea">
        <div className="row">
          <div className="col-md-2 col-sm-12 col-lg-4">
            <img
              src={Shape4}
              alt=""
              className="ourchefshape4 mt-5 ml-0"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <div className="col-md-8 col-sm-12 col-lg-4 text-center">
            <img
              src={Shape2}
              alt=""
              className="ourchefshape2 "
              style={{ transform: "scaleX(-1)", marginTop: "0px" }}
            />
          </div>
          <div className="col-md-2 col-sm-12 col-lg-4 text-end">
            <img src={Shape5} alt="" className="ourchefshape4 mt-5 ml-0" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 ">
            <div className="mt-5 text-center">
              <p className="bigburderheading">Big Burger</p>
              <p className="bigburgerp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.{" "}
              </p>
              <button className="orderbtn"> Order Now </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5 text-center">
              <img src={burger} alt="" className="bestburgerimg" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 text-center">
            <img
              src={Shape1}
              className="ourchefshape1 mb-5"
              alt=""
              style={{ transform: "scaleX(-1)" }}
            />
          </div>

          <div className="col-md-4 col-lg-4 text-center">
            <img
              src={Shape6}
              alt=""
              className="ourchefshape6"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>

          <div className="col-md-4 col-lg-4 text-end">
            <img
              src={Shape3}
              alt=""
              className="ourchefshape3"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Big Burger --> */}

      {/* <!-- Statistics Area --> */}

      <div className="container-fluid statarea">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center mt-5">
            <p className="statheading">Statistics</p>
            <p className="statp ms--md-5 me-md-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.{" "}
            </p>
          </div>
        </div>
        <div className="row offset-md-2">
          <div className="col-md-3">
            <div>
              <div className="statround mx-auto">
                <p className="statroundp mt-3">7k</p>
                <p className="statroundp2">Customer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <div className="statround mx-auto">
                <p className="statroundp mt-3">109</p>
                <p className="statroundp2">Outlet</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <div className="statround mx-auto">
                <p className="statroundp mt-3">35</p>
                <p className="statroundp2">country</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Statistics Area --> */}

      {/* <!-- Popular Area --> */}
      <div className="container-fluid populararea position-relative">
        <div className="row">
          <div className="col-md-2 text-end">
            <img
              src={Shape5}
              alt=""
              className="ourchefshape5 mb-0"
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
          <div className="col-md-8">
            <p className="popularheading mt-5"> Popular Package</p>
          </div>
          <div className="col-md-2 text-start">
            <img
              src={Shape2}
              alt=""
              className="ourchefshape2 mb-0"
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
        </div>
        <div className="position-relative">
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <img
                src={Shape4}
                alt=""
                className="ourchefshape4 ml-0"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div className="col-md-3 popularpackarea mb-5 ">
              <p className="packageheading">Package I</p>
              <div className="text-center">
                <img src={bicon} alt="" className="bicon" />
              </div>
              <div className="text-center">
                <p className="packageheading">$10.00</p>
              </div>
              <div className="text-center">
                <p className="packagep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="text-center">
                <button className="orderbtn mb-3 mt-3"> Order Now </button>
              </div>
            </div>
            <div className="col-md-3 popularpackarea ms-5 mb-5  ">
              <p className="packageheading">Package II</p>
              <div className="text-center">
                <img src={bicon} alt="" className="bicon" />
              </div>
              <div className="text-center">
                <p className="packageheading">$20.00</p>
              </div>
              <div className="text-center">
                <p className="packagep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="text-center">
                <button className="orderbtn mb-3 mt-3"> Order Now </button>
              </div>
            </div>
            <div
              className="col-md-3 popularpackarea ms-5 mb-5"
              style={{ zIndex: "10" }}
            >
              <p className="packageheading">Package III</p>
              <div className="text-center">
                <img src={bicon} alt="" className="bicon" />
              </div>
              <div className="text-center">
                <p className="packageheading">$30.00</p>
              </div>
              <div className="text-center">
                <p className="packagep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="text-center">
                <button className="orderbtn mb-3 mt-3"> Order Now </button>
              </div>
            </div>
            <div className="col-md-1 text-end">
              <img
                src={Shape1}
                alt=""
                className="ourchefshape4 mt-5 ml-0"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img
              src={Shape6}
              alt=""
              className="ourchefshape6"
              style={{
                width: "80px",
                marginTop: "100px",
                transform: "rotate(180deg)",
                position: "absolute",
                bottom: "20px",
                left: "0px",
              }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={Shape3}
              alt=""
              className="ourchefshape3"
              style={{
                width: "120px",
                marginTop: "100px",
                transform: "rotate(320deg)",
                position: "absolute",
                bottom: "10px",
                right: "130px",
              }}
            />
          </div>
        </div>
      </div>
      {/* <!-- Popular Area --> */}

      {/* <!-- berry henderson area --> */}

      <div className="container-fluid barryimage mx-0 px-0 position-relative">
        <div className=" container-fluid layoutsecond"></div>
        <span className="layoutsecondtext position-absolute">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{" "}
        </span>
        <br />
        <span className="layoutsecondtext2 mt-3 position-absolute-text">
          Barry Henderson
        </span>
      </div>

      {/* <!-- berry henderson area --> */}
      {/* <!-- newsletter --> */}
      <div className="container-fluid newletterarea">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={Shape5}
              alt=""
              className="ourchefshape5 mb-0"
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
          <div className="col-md-4 text-center">
            <img
              src={Shape4}
              alt=""
              className="ourchefshape4 mt-5 ml-0"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <div className="col-md-4 text-end">
            <img
              src={Shape2}
              alt=""
              className="ourchefshape2 mb-0"
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="newletterheading">Don’t miss Our Update</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <img
              src={Shape6}
              alt=""
              className="ourchefshape6"
              style={{
                width: "80px",
                marginTop: "40px",
                transform: "rotate(180deg)",
              }}
            />
          </div>
          <div className="col-md-8">
            <p className="newletterp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.{" "}
            </p>
          </div>
          <div className="col-md-2">
            <img
              src={Shape1}
              alt=""
              className="ourchefshape4 mt-2"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="content">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control  form-section"
                  placeholder="Enter your email..."
                />
                <span className="input-group-btn">
                  <button className="btn formbtn" type="submit">
                    SUBSCRIBE
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <img
              src={Shape3}
              alt=""
              className="ourchefshape3"
              style={{
                width: "106px",
                marginTop: "107px",
                marginBottom: "50px",
              }}
            />
          </div>
          <div className="col-md-8 text-center mt-5">
            <img
              src={Shape5}
              alt=""
              className="ourchefshape5 mb-0"
              style={{ transform: "rotate(0deg)" }}
            />
          </div>
          <div className="col-md-2 mt-5">
            <img
              src={Shape4}
              alt=""
              className="ourchefshape4 ml-0"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </div>
      </div>
      {/* <!--  newletter--> */}

      {/* <!-- Footer --> */}
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <p className="footertitle socialiconsmargin">Title Here</p>
              <p className="footertitlep socialiconsmargin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
                dignissim enim.{" "}
              </p>
              <div className="socialiconsmargin">
                <div className="socialicons">
                  <a href="#" style={{ color: "black" }}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="socialicons">
                  <a href="#" style={{ color: "black" }}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="socialicons">
                  <a href="#" style={{ color: "black" }}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="socialicons">
                  <a href="#" style={{ color: "black" }}>
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-md-4 col-sm-12 col-lg-4">
                  <p className="footertitle">About</p>
                  <a href="#">
                    <p className="footertitlep">History</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Our Team</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Brand Guidelines</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Terms {"&"} Condition</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Privacy Policy</p>
                  </a>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4">
                  <p className="footertitle">Services</p>

                  <a href="#">
                    <p className="footertitlep">How to Order</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Our Product</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Order Status</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Promo</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Payment Method</p>
                  </a>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4">
                  <p className="footertitle">Other</p>
                  <a href="#">
                    <p className="footertitlep">Contact Us</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Help</p>
                  </a>
                  <a href="#">
                    <p className="footertitlep">Privacy</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
    </div>
  );
}

export default App;
