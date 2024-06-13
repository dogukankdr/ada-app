import React, { useState } from "react";
import AboutComponent from "../components/AboutComponent";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const Home = () => {
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="header_section" style={{ float: "left" }}>
        {/* <!-- banner section start -->  */}
        <div
          className="banner_section layout_padding"
          style={{ border: "1px solid white" }}
        >
          <div className="container-fluid">
            <div
              id="banner_slider"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">IOS Uygulamamız</h1>
                        <p className="banner_text">
                          iOS uygulamamızı indirerek, en güncel ve kapsamlı
                          içeriklere anında erişin. Deprem hazırlık rehberleri,
                          bağış yapma imkanları ve daha fazlası 
                          için hemen indirin ve güvenli bir yaşam için ilk
                          adımı atın!
                        </p>
                        <div className="readmore_btn">
                          <a
                            href="https://www.apple.com/tr/app-store/"
                            target="_blank"
                          >
                            Daha Fazlası
                          </a>
                        </div>
                        <div className="started_bt">
                          <a href="/contact">Bize Ulaşın</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="banner_img">
                        <img src="assets/images/banner-ios.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">XXXXXX</h1>
                        <p className="banner_text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Explicabo, inventore. Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Quod illo hic quis
                          tempora voluptates fugiat cum molestiae, quaerat
                          facilis mollitia?
                        </p>
                        <div className="readmore_btn">
                          <a href="#">Daha Fazlası</a>
                        </div>
                        <div className="started_bt">
                          <a href="/contact">Bize Ulaşın</a>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="banner_img">
                        <img src="assets/images/banner-ios.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">XXXXXXX</h1>
                        <p className="banner_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci, nobis.
                        </p>
                        <div className="readmore_btn ">
                          <a href="#">Daha Fazlası</a>
                        </div>
                        <div className="started_bt">
                          <a href="/contact">Bize Ulaşın</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="banner_img">
                        <img src="assets/images/banner-ios.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#banner_slider"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#banner_slider"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <img
          src="assets/images/custom_banner_wave.png"
          className="custom_banner_wave"
        />

        {/* <!-- banner section end --> */}
      </div>
      <div className="container">
        <div className="box_section">
          <div className="online_box">
            <button
              className="online_box_left"
              onClick={() => redirectTo("https://www.apple.com/tr/app-store/")}
            >
              <div className="online_box_main">
                <div className="box_left">
                  <div className="right_arrow">
                    <i className="fa-brands fa-apple"></i>
                  </div>
                </div>
                <div className="box_right">
                  <p className="book_text">App Store</p>
                  <h4 className="appoinment_text">İndir!</h4>
                </div>
              </div>
            </button>
            <button
              className="online_box_left"
              onClick={() => redirectTo("https://play.google.com/store/")}
            >
              <div className="online_box_main">
                <div className="box_left">
                  <div className="right_arrow">
                    <i className="fa-brands fa-google-play"></i>
                  </div>
                </div>
                <div className="box_right">
                  <p className="book_text">Google Play</p>
                  <h4 className="appoinment_text"> İndir!</h4>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="news_component">
          <News />
        </div>
      </div>
      <AboutComponent />

      <ContactComponent name={name} age={age} /> */}
      <AboutComponent />
    </>
  );
};

export default Home;
