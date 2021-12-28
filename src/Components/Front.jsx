import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import man1 from "../images/man1.jpg";
import man2 from "../images/man2.png";
export const Front = () => {
  return (
    <div className="container py-5">
      {/* part 1 */}

      <div className="row align-items-center justify-content-center">
        <div className="col-md col-12 pb-4 ">
          <div className="th-40 text-center">Save your data strorage here</div>
          <div className="text-white pb-4 text-center text-md-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sint eaque repellat soluta, ipsum eius sed accusamus eum sapiente,
            placeat nostrum molestias optio porro at dignissimos animi! Quidem,
            vitae odit.
          </div>
          <div className="text-center">
            <button className="shadow-sm rounded text-white p-3 th-20">
              Learn more
            </button>
          </div>
        </div>
        <div className="col text-center">
          <img
            src={img1}
            className="img-fluid"
            alt=""
            style={{ border: "1.5px solid rgb(0, 247, 255)" }}
          />
        </div>
      </div>

      {/* part 2 */}

      <div className="row align-items-center justify-content-center pt-5 mt-5 shadow rounded ">
        <div className="col text-center ">
          <img
            src={img2}
            className=""
            alt=""
            style={{ width: "320px", border: "1.5px solid rgb(0, 247, 255)" }}
          />
        </div>

        <div className="col-md col-12 pb-1  order-first order-md-last ">
          <div className="th-30 text-center pt-4 pb-1">
            We are a high-level data-storage bank
          </div>
          <div className=" ">
            <p className="text-white text-center text-md-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint eaque repellat soluta, ipsum eius sed accusamus
              eum sapiente, placeat nostrum molestias optio porro at dignissimos
              animi! Quidem, vitae odit.
            </p>
          </div>
        </div>
      </div>

      {/* carousel */}

      <div className="th-28 pt-5 mt-5 pb-2">Freatures</div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel shadow bg-dark"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" px-5 mx-5 text-center text-white h-6 shadow-lg">
              <i
                className="fa fa-search fa-5x pb-2 text-white"
                aria-hidden="true"
              ></i>
              <div className="thcolor h6">Search data</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              incidunt nemo, veritatis accusantium in minus est odit neque
              accusamus consectetur possimus voluptatem enim omnis dolor rem
              optio ipsa dolorem et.
            </div>
            <div className="" style={{ height: "50px" }}></div>
          </div>
          <div className="carousel-item">
            <div className=" px-5 mx-5 text-center text-white h-6 shadow-lg">
              <i
                className="fa fa-print fa-5x pb-2 text-white"
                aria-hidden="true"
              ></i>
              <div className="thcolor h6">Print out</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              incidunt nemo, veritatis accusantium in minus est odit neque
              accusamus  rem
              optio ipsa dolorem et.
            </div>
            <div className="" style={{ height: "50px" }}></div>
          </div>
          <div className="carousel-item">
            <div className=" px-5 mx-5 text-center text-white h-6 shadow-lg">
              <i
                className="fa fa-shield fa-5x pb-2 text-white"
                aria-hidden="true"
              ></i>
              <div className="thcolor h6">Security code</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              incidunt nemo, veritatis accusantium in minus est odit neque
              accusamus  rem
              optio ipsa dolorem et.
            </div>
            <div className="" style={{ height: "50px" }}></div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon me-5 "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon ms-5 "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* part 4 */}
      <div className="row align-items-center pt-md-5 ">
        <div className="col-12 col-md-6 pe-0">
          <div className=" th-28 pt-5 mt-5 pt-md-0 mt-md-0 pb-3  ">
            Download our app
          </div>
          <div className="  text-left text-white h-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            incidunt nemo, veritatis accusantium in minus est odit neque
            accusamus  rem optio
            ipsa dolorem et.
          </div>
          <div className="text-left">
            <button className="shadow-sm rounded text-white px-2 my-3 th-20">
              Download
            </button>
          </div>
        </div>
        <div className="col text-center ps-0">
          <img
            src={img3}
            alt=""
            className="col img-fluid"
            style={{ height: "320px", border: "1.5px solid rgb(0, 247, 255)" }}
          />
        </div>
      </div>
      {/* testimonials */}

      <div className="th-28 pt-5 mt-5 pb-2">Testimonials</div>
      <div className="row align-items-center">
        <div className=" col-12 shadow p-5 col-md d-flex align-items-center ">
          <img src={man1} style={{width:"100px", height:"100px"}} alt="" className="img-fluid border-primary shadow rounded-circle me-3" />
          <div>
            <div className="thcolor h6 d-flex align-items-center mb-0">
              Luna Peter
              <i className="fa fa-ellipsis-h ms-4 fa-4x" aria-hidden="true"></i>
            </div>
            <div className="h6 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae dolor optio libero nihil odio quibusdam voluptas quo
              alias esse at!
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className=" col  shadow p-5 d-flex align-items-center ">
        <img src={man2} style={{width:"100px", height:"100px"}} alt="" className="img-fluid border-primary shadow rounded-circle me-3" />
          <div>
            <div className="thcolor h6 d-flex align-items-center mb-0 ">
              Alex Holms
              <i className="fa fa-ellipsis-h ms-4 fa-4x" aria-hidden="true"></i>
            </div>
            <div className="h6 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae dolor optio libero nihil odio quibusdam voluptas quo
              alias esse at!
            </div>
          </div>
        </div>
      </div>


      {/* subscribe */}
<div className="th-28 pt-5 mt-5 pb-2">Subscribe !</div>
<div className="h6 mb-3 text-white">Lorem ipsum dolor sit amet,  Voluptate quas reprehenderit porro voluptas deserunt quaerat.</div>

<input type="email" id="input" name="email" placeholder="Enter your email" className="py-2 me-2 h6 shadow-lg rounded bg-dark" />
<button className="shadow rounded p-2 color mb-5  text-white ">Join Us</button>
<hr style={{backgroundColor:"grey"}} classNmae="m-5 " />







      {/* try for free */}
<div className="th-28 pt-3 mt-3 pb-2"> Try for free</div>
<div className="h6 mb-3 text-white">Lorem ipsum dolor sit amet,  Voluptate quas reprehenderit porro voluptas deserunt quaerat.</div>

<button className="shadow rounded p-2 text-white mb-5 me-4">Learn More</button>
<button className="shadow rounded p-2 text-white mb-5">Request Demo -></button>





    </div>
  );
};
