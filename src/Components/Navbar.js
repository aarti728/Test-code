import React from "react";
import slide from "../Asset/c11.jpg";
import slide1 from "../Asset/c10.jpg";
import slide2 from "../Asset/slide3.jpg";
import slide3 from "../Asset/c9.jpg";
import slide4 from "../Asset/c8.jpg";
import slide5 from "../Asset/wall22.jpg";
import slide6 from "../Asset/slide7.jpg";
import slide7 from "../Asset/slide8.jpg";
import slide8 from "../Asset/wall.jpg";
import slide9 from "../Asset/slide11.jpg";
import logo from "../Asset/butt.png";
import lo from "../Asset/but.png";
import slide10 from "../Asset/c1.jpg";
import slide11 from "../Asset/c2.jpg";
import slide12 from "../Asset/c16.jpeg";
import slide13 from "../Asset/c19.jpg";
import blog from "../Asset/kat6.jpg";
import blog1 from "../Asset/kat2.jpg"
import blog2 from "../Asset/kat5.jpg"
import blog3 from "../Asset/kat4.jpg"


import "./nav.css";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg  "
        style={{ backgroundColor: " #ffffe6" }}
      >
        <div class="container-fluid text-light">
          <a
            class="navbar-brand text-dark mb-1 d-flex"
            href="#"
            style={{ fontFamily: "Lobster" }}
          >
            {" "}
            <img
              className="hip"
              src={logo}
              alt=""
              style={{ transform: "rotate(-40deg)" }}
            />{" "}
            <h1 className="hide fs-5 mt-4" id="top">
              India's Favourite Wedding Planning Platform
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <select
                class="form-select"
                aria-label="Default select example"
                style={{ width: "35vw", color: "purple" }}
              >
                <option selected>All Cities</option>
                <option value="1">bangluru</option>
                <option value="2">chennai</option>
                <option value="3">Goa</option>
                <option value="3">Lucknow</option>
                <option value="3">kanpur</option>
                <option value="3">indore</option>
              </select>
            </ul>
            <form class="d-flex " role="search">
              <button
                class="btn btn-outline-dark mx-2 p-2 fw-bold"
                type="submit"
              >
                <i class="fa fa-tty fs-5"> </i> &nbsp;Book Now
              </button>

              <button class="btn btn-outline-dark p-2 fw-bold" type="submit">
                Learn More <i class="fa fa-share"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <nav
        class="navbar navbar-expand-lg   "
        style={{ backgroundColor: "#990033" }}
      >
        <div class="container-fluid text-light">
          <img src={lo} alt="" style={{ height: "5vh" }} />
          <a class="navbar-brand text-light fw-bolder" href="#">
            WedMeGooD
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-5   mb-lg-0">
              <li class="nav-item ">
                <a
                  class="nav-link active  text-light mt-2 "
                  aria-current="page"
                  href="#"
                >
                  Venue
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light mt-2 " href="#">
                  Vendors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light mt-2" href="#">
                  Photos
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link text-light mt-2" href="#">
                  Real Weddings
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link text-light mt-2" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light mt-2" href="#">
                  shop
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-light mt-1"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  E-Invite <img src={lo} alt="" style={{ height: "5vh" }} />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-light fw-bold "
                type="submit"
                style={{ width: "15vw" }}
              >
                {" "}
                Log In <i class="fa fa-sign-in fs-5 mt-1"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide5} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
             <div className="form text-center" style={{float:"right"}}>
              <h1 className="dog fs-1">Contact Us</h1>
              <div className="int py-2">
              {/* <label className="fs-4" style={{marginLeft:"2%"}}>Enter Your Name</label><br /> */}
              <input type="text" className="tab text-light" placeholder="Name"/>
              {/* <label className="fs-4"> Enter Your Contact Number</label><br /> */}
              <input type="text" className="tab mt-3 text-light" placeholder="Contact Number"/><br />
              <label className="text-light"> (Event Booking Date)</label>
              <input type="date" className="tab mt-3 text-light" placeholder=" Event Booking Date"/>
              <button className="btn mt-4 text-dark fs-4 bg-danger  fw-bold">Book Now</button>
             </div>
             </div>
            </div>
          </div>
          <div class="carousel-item">`12`
            <img src={slide6} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slide7} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slide8} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>{" "}
          <div class="carousel-item">
            <img src={slide9} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="many mt-5" style={{ backgroundColor: "#ffffe6" }}>
        <h5 className="h5 text-center fs-2 mt-4" style={{ color: "#990033" }}>
          Two Souls with but a single thought;
        </h5>
        <h4
          className="heading fs-2 text-center "
          style={{ marginLeft: "12%", color: "#0066ff" }}
        >
          Two heart that beat as One
        </h4>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-3 text-center">
            <img
              src={slide2}
              alt=""
              className="mig mt-5 mb-5"
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-3">
            <p
              className="para mt-5 fs-4 fw-100 text-left"
              style={{ color: "#993300" }}
            >
              *******!!!!!!******* doloremque dolores voluptate asperiores
              numquam! Eius sint sapiente unde cumque magni quod sit, itaque
              quidem laudantium voluptatibus fugit! A reprehenderit perferendis
              fugiat? Id dolorum voluptates non ipsa maiores exercitationem
              maxime doloribus possimus nemo esse. Explicabo aspernatur illum
              est quam quisquam natus id distinctio autem itaque. Quas, at
              quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Odio, exercitationem minus praesentium quos cupiditate asperiores
              quia deserunt aliquam nesciunt fugit voluptatem doloribus
              necessitatibus quae numquam. Provident tenetur saepe magnam,
              exercitationem rerum culpa iure vitae! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias voluptatum perspiciatis
              officiis excepturi blanditiis quam, aut ipsa veritatis soluta
              rerum deleniti repudiandae! Soluta?........!!!****!!!!!!******
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-5">
        <h4 style={{fontFamily:"Acme" , color:"gray"}}>Popular Venue Searches</h4>
        <div class="row mt-5">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card2">
              <img src={slide} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title  m-2">Banquet Halls</h5>
                <p class="text-center fw-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut, voluptates aliquam quisquam officiis ipsum?</p>
                <button
                    type="button "
                    class="btn  text-light fw-bold  text-center mt-3"
                    style={{ width: "9vw", backgroundColor: "#e60073" }}
                  >
                    Book Now
                  </button>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card2">
              <img src={slide1} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title  m-2">Lawns</h5>
                <p class="text-center fw-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut, voluptates aliquam quisquam officiis ipsum?</p>
                <button
                    type="button "
                    class="btn  text-light fw-bold  text-center mt-3"
                    style={{ width: "9vw", backgroundColor: "#e60073" }}
                  >
                    Book Now
                  </button>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card2">
              <img src={slide3} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title m-2 ">Framhouses</h5>
                <p class="text-center fw-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut, voluptates aliquam quisquam officiis ipsum?</p>
                <button
                    type="button "
                    class="btn  text-light fw-bold  text-center mt-3"
                    style={{ width: "9vw", backgroundColor: "#e60073" }}
                  >
                    Book Now
                  </button>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div class="card2 text-center">
              <img src={slide4} class="card-img-top" alt="..." />
              <div class="card-body text-center"></div>
              <h5 class="card-title m-2">Hotels</h5>

              <p class="text-center fw-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut, voluptates aliquam quisquam officiis ipsum?</p>
                <button
                    type="button "
                    class="btn  text-light fw-bold  text-center mt-3"
                    style={{ width: "9vw", backgroundColor: "#e60073" }}
                  >
                    Book Now
                  </button>
            </div>
          </div>
        </div>


{/* <div className="ban mt-5" width={"90%"} style={{backgroundColor:"red",height:"60vh"}}>
  <div className="row">
    <div className="col-xl-6 col-lg-6">
      <h4>Download The WedMeGood Mobile App Today!</h4>
    </div>
  </div>
</div> */}












        <div className="bride mt-5">
          <h4 style={{fontFamily:"Acme", color:"gray"}}>Popular Bridal Searches</h4>
        </div>
        <div className="hold mt-5">
          <div className="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={slide10} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal Wear
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light fw-bold text-center mt-3"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={slide11} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal jwellary
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light fw-bold  text-center mt-3"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={slide12} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal Makeup
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light fw-bold text-center mt-3"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={slide13} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal Wear
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light  text-center mt-3 fw-bold"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="bride mt-5">
          <h4 style={{fontFamily:"Acme", color:"gray"}}>Latest Blogs</h4>
        </div>
        <div className="hold mt-5">
          <div className="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={blog1} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal Wear
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light fw-bold text-center mt-3"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={blog} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal jwellary
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light fw-bold  text-center mt-3"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={blog2} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal Makeup
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light fw-bold text-center mt-3"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div class="card3">
                <img src={blog3} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5
                    class="card-title text-dark text-center fw-100 mt-3"
                    style={{ fontFamily: "lobster" }}
                  >
                    Bridal Wear
                  </h5>
                  <button
                    type="button "
                    class="btn  text-light  text-center mt-3 fw-bold"
                    style={{ width: "13vw", backgroundColor: "#ff0066" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
};

export default Navbar;
