import React from "react";
import "./Homeslider.css";

export default function Homeslider() {
  const toggleNext = (event) => {
    // event.preventDefault(); // Prevent default anchor click behavior

    const sections = document.querySelectorAll(".leftandin");
    let currentIndex = -1;

    sections.forEach((section, index) => {
      if (!section.classList.contains("displaynone")) {
        currentIndex = index;
        section.classList.add("displaynone");
      }
    });

    const nextIndex = (currentIndex + 1) % sections.length;
    sections[nextIndex].classList.remove("displaynone");
  };

  // Auto increment every 5 seconds
  // setInterval(toggleNext, 5000);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
      
      <div className="body-overlay">
        <div className="container" style={{position: 'relative'}}>
          {/* ==================== */}
          <div className="leftandin animated">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
              EDUCATION SOLUTION
              </h6>
              <p className="headline animated fadeInLeft">
              Best IT Services <br /> For Your Business
              </p>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="img/gallery/ai_1.jpg" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("img/herobanner/ai_1.jpg")',
                backgroundSize: "cover",
              }}
            >
              <div className="toggler">
                <a className="next-article" onClick={toggleNext}>
                  <h4 className="article-position">01</h4>
                  <img src="img/next.png" height="55px" width="55px" alt="Next" />
                </a>
              </div>
            </div>
          </div>
          {/* ====================== */}
          {/* ==================== */}
          <div className="leftandin displaynone fadeIn">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
              EDUCATION SOLUTION
              </h6>
              <p className="headline animated fadeInLeft">
              Best IT Services <br /> For Your Business
              </p>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="img/gallery/ai_2.jpg" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("img/herobanner/university_1.jpg")',
                backgroundSize: "cover"
              }}
            >
              <div className="toggler">
                <a className="next-article" onClick={toggleNext}>
                  <h4 className="article-position">02</h4>
                  <img src="img/next.png" height="55px" width="55px" alt="Next" />
                </a>
              </div>
            </div>
          </div>
          {/* ====================== */}
          {/* ==================== */}
          <div className="leftandin displaynone fadeIn">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
              EDUCATION SOLUTION
              </h6>
              <p className="headline animated fadeInLeft">
              Best IT Services <br /> For Your Business
              </p>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="img/gallery/ai_3.jpg" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("img/herobanner/university_3.jpg")',
                backgroundSize: "cover"
              }}
            >
              <div className="toggler">
                <a className="next-article" onClick={toggleNext}>
                  <h4 className="article-position">03</h4>
                  <img src="img/next.png" height="55px" width="55px" alt="Next" />
                </a>
              </div>
            </div>
          </div>
          {/* ====================== */}
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </>
  );
}
