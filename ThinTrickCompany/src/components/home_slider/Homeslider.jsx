import React from "react";
import "./Homeslider.css";

export default function Homeslider() {
  const toggleNext = (event) => {
    event.preventDefault(); // Prevent default anchor click behavior

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
  setInterval(toggleNext, 5000);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
      <link rel="stylesheet" href="./style.css" />
      <div className="body-overlay">
        <div className="container">
          <div className="leftandin animated" id="leftandin1">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
              EDUCATION SOLUTION
              </h6>
              <p className="headline animated fadeInLeft">
              Best IT Services <br /> For Your Business
              </p>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="img/about/about_1.png" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("https://t4.ftcdn.net/jpg/05/51/26/37/360_F_551263784_ShXFYL6pNLmLfNcgT3x8plmCdoPkJohh.jpg")',
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
          <div className="leftandin displaynone fadeIn">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
                2018 &nbsp; — &nbsp; P-frame
              </h6>
              <h1 className="headline animated fadeInLeft">
                Lorem Ipsum
                <br />
                Recoda
              </h1>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="https://img.freepik.com/premium-photo/there-is-cat-that-is-sitting-ledge-chinese-garden-generative-ai_900396-35755.jpg" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg")',
                backgroundSize: "cover",
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
          <div className="leftandin displaynone fadeIn">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
                2018 &nbsp; — &nbsp; P-frame
              </h6>
              <h1 className="headline animated fadeInLeft">
                Lorem Ipsum
                <br />
                Recoda
              </h1>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="https://img.freepik.com/premium-photo/there-is-cat-that-is-sitting-ledge-chinese-garden-generative-ai_900396-35755.jpg" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg")',
                backgroundSize: "cover",
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
          <div className="leftandin displaynone fadeIn">
            <div className="outer-left">
              <h6 className="timeline animated bounceInLeft" style={{ whiteSpace: "nowrap" }}>
                2018 &nbsp; — &nbsp; P-frame
              </h6>
              <h1 className="headline animated fadeInLeft">
                Lorem Ipsum
                <br />
                Recoda
              </h1>
              <div className="outer-left-img-main">
                <img className="animated fadeInLeft" src="https://img.freepik.com/premium-photo/there-is-cat-that-is-sitting-ledge-chinese-garden-generative-ai_900396-35755.jpg" alt="Cat on a ledge" />
              </div>
            </div>
            <div
              className="inner animated fadeIn"
              style={{
                background: 'url("https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg")',
                backgroundSize: "cover",
              }}
            >
              <div className="toggler">
                <a className="next-article" onClick={toggleNext}>
                  <h4 className="article-position">04</h4>
                  <img src="img/next.png" height="55px" width="55px" alt="Next" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </>
  );
}
