import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="text-center text-lg-start bg-dark text-muted" style={{backgroundColor:"#990033"}}>        
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2 mt-5">
                <h6 class="text-uppercase fw-bold mb-4 text-white">
                  CONTACT INFO
                </h6>
                <p className="cnt text-white mb-1">ADDRESS:</p>
                <p>123 World Street,Faridabad,India</p>
                <p className="cnt text-white mb-1">PHONE:</p>
                <p>(0129)-125678</p>
                <p className="cnt text-white mb-1">EMAIL:</p>
                <p>mail@example.com</p>
                <p className="cnt text-white mb-1">WORKING DAYS/HOURS:</p>
                <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2 mt-5 text-decoration-none ">
                <h6 class="text-uppercase fw-bold mb-4 text-white">
                  CUSTOMER SERVICE
                </h6>

                <a href="#!" class="text-reset">
                  Help & FAQ
                </a><br></br>

                <a href="#!" class="text-reset">
                  Order Tracking
                </a><br></br>

                <a href="#!" class="text-reset">
                  Shipping & Delivery
                </a><br></br>

                <a href="#!" class="text-reset">
                  Orders History{" "}
                </a><br></br>

                <a href="#!" class="text-reset">
                  Advanced Search{" "}
                </a><br></br>

                <a href="#!" class="text-reset">
                  My Account
                </a><br></br>

                <a href="#!" class="text-reset">
                  Carrers
                </a><br></br>

                <a href="#!" class="text-reset">
                  About Us
                </a><br></br>

                <a href="#!" class="text-reset">
                  Corporate Sales{" "}
                </a><br></br>

                <a href="#!" class="text-reset">
                  Privacy
                </a><br></br>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5  ">
                <h6 class="text-uppercase fw-bold mb-4 text-white">POPULAR TAGS</h6>
                
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Bag
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white ">
                    Black
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white" >
                    Blue
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Clothes
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white" >
                    Fashion
                  </button>
                
                
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Hub
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Shirt
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Shoes
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Skirt
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Sports
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm m-1 fs-10 text-white">
                    Sweater
                  </button>
                
                
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
                <h6 class="text-uppercase fw-bold mb-4 text-white">
                  SUBSCRIBE NEWSLETTER
                </h6>
                <p>
                Get all the latest information on events, sales and offers. Sign up for newsletter:
                </p>
                <input type="text" className="form-control rounded-5 bg-dark  text-secondary border-0.2" placeholder="Email address  " /><br></br>
                <button type="button"  className="btn btn-primary  mb-1 rounded-5">Subscribe</button>
              </div>
            </div>
          </div>
        </section>

       
      </footer>
    </>
  );
};

export default Footer;