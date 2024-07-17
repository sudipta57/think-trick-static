import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* topbar__section__stert */}
      <div className="topbararea topbararea--2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="topbar__left">
                <ul>
                  <li>
                    <a href="tel:9830721610" style={{ color: "#fff" }}>
                      Call Us: +91 9830721610
                    </a>
                  </li>
                  <li className="mx-3">
                    <a
                      href="mailto:think.dev.group@gmail.com"
                      style={{ color: "#fff" }}
                    >
                      Mail : think.dev.group@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="topbar__right">
                <div className="topbar__icon">
                  <i className="icofont-location-pin" />
                </div>
                <div className="topbar__text">
                  <p>
                    <a
                      href="https://maps.app.goo.gl/rY5UZRh2Q2wGJoqo9"
                      style={{ color: "#fff" }}
                      target="_blank"
                    >
                      Kakdwip, Gobardhanpur, West Bengal, India, 743371
                    </a>
                  </p>
                </div>
                <div className="topbar__list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-youtube-play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* topbar__section__end */}
      {/* headar section start */}
      <header>
        <div className="headerarea headerarea__2 header__sticky header__area sticky">
          <div className="container desktop__menu__wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="headerarea__left">
                  <div className="headerarea__left__logo">
                    <a href="index.html">
                      <img
                        loading="lazy"
                        src="img/logo/logo_1.png"
                        alt="logo"
                        style={{ width: "200px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 main_menu_wrap">
                <div className="headerarea__main__menu">
                  <nav>
                    <ul>
                      <li>
                        <Link className="headerarea" to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="headerarea" to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="headerarea" to="portfolio">
                          Our Portfolio
                        </Link>
                      </li>

                      <li>
                        <Link className="headerarea" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="headerarea" to="/ourteam">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <a className="headerarea__has__dropdown" href="#">
                          Services
                          <i className="icofont-rounded-down" />
                        </a>
                        <ul
                          className="headerarea__submenu"
                          style={{ minWidth: 300 }}
                        >
                          <li>
                            <Link to="web-service">Web Development</Link>
                          </li>
                          <li>
                            <Link to="/android">Android App Development</Link>
                          </li>
                          <li>
                            <Link to="/digital-marketing">
                              Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/graphics-and-logo">
                              Graphics and Logo Design
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="headerarea" to="/contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="headerarea__right">
                  <div className="headerarea__button">
                    <a href="#">Get Start</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mob_menu_wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="mobile-logo">
                  <a className="logo__dark" href="#">
                    <img loading="lazy" src="img/logo/logo_1.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap">
                  <div className="headerarea__right"></div>
                  <div className="mobile-off-canvas">
                    <a className="mobile-aside-button" href="#">
                      <i className="icofont-navigation-menu" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section end */}

      {/* Mobile Menu Start Here */}
      <div className="mobile-off-canvas-active">
        <a className="mobile-aside-close">
          <i className="icofont  icofont-close-line" />
        </a>
        <div className="header-mobile-aside-wrap">
          <div className="mobile-search">
            <form className="search-form" action="#">
              <input type="text" placeholder="Search entire store…" />
              <button className="button-search">
                <i className="icofont icofont-search-2" />
              </button>
            </form>
          </div>
          <div className="mobile-menu-wrap headerarea">
            <div className="mobile-navigation">
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="menu-item-has-children ">
                    <Link to="/portfolio">Our Portfolio</Link>
                  </li>
                  <li className="menu-item-has-children ">
                    <Link to="/blog">BLog</Link>
                  </li>
                  <li className="menu-item-has-children ">
                    <Link to="/ourteam">Our Team</Link>
                  </li>
                  <li className="menu-item-has-children ">
                    <a href="#">Services</a>
                    <ul className="dropdown">
                      <li>
                        <Link to="/web-service">Web Development</Link>
                        <Link to="/android">Android App Development</Link>
                        <Link to="/digital-marketing">Digital Marketing</Link>
                        <Link to="/graphics-and-logo">
                          Graphics and Logo Design
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children ">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mobile-curr-lang-wrap">
            <div className="single-mobile-curr-lang">
              <a className="mobile-language-active" href="#">
                Language <i className="icofont-thin-down" />
              </a>
              <div className="lang-curr-dropdown lang-dropdown-active">
                <ul>
                  <li>
                    <a href="#">English (US)</a>
                  </li>
                  <li>
                    <a href="#">English (UK)</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mobile-social-wrap">
            <a className="facebook" href="#">
              <i className="icofont icofont-facebook" />
            </a>
            <a className="twitter" href="#">
              <i className="icofont icofont-twitter" />
            </a>
            <a className="pinterest" href="#">
              <i className="icofont icofont-pinterest" />
            </a>
            <a className="instagram" href="#">
              <i className="icofont icofont-instagram" />
            </a>
            <a className="google" href="#">
              <i className="icofont icofont-youtube-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu end Here */}
    </>
  );
}
