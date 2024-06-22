/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./Homeslider.css";

export default function Homeslider({ slidesData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const toggleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };
  useEffect(() => {
    const interval = setInterval(toggleNext, 3000); // Auto increment every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
      />

      <div className="body-overlay">
        <div className="container" style={{ position: "relative" }}>
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className={`leftandin animated ${
                index === currentIndex ? "fadeIn" : "displaynone"
              }`}
            >
              <div className="outer-left">
                <h6
                  className="timeline animated bounceInLeft"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {slide.heading}
                </h6>
                <p className="headline animated fadeInLeft">{slide.title}</p>
                <div className="outer-left-img-main">
                  <img
                    className="animated fadeInLeft"
                    src={slide.imgSrc}
                    alt="Description"
                  />
                </div>
              </div>
              <div
                className="inner animated fadeIn"
                style={{
                  background: `url(${slide.background})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="toggler">
                  <a className="next-article" onClick={toggleNext}>
                    <h4 className="article-position">
                      {slide.articlePosition}
                    </h4>
                    <img
                      src="img/next.png"
                      height="55px"
                      width="55px"
                      alt="Next"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </>
  );
}
