import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredCourses = activeFilter === '*'
    ? courses
    : courses.filter(course => course.filters.includes(activeFilter));

  return (
    <>
    <div className="breadcrumbarea" style={{ background: 'linear-gradient(45deg, #0f00f7, #996767)', paddingTop: '100px',paddingBottom: '100px' }}>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="breadcrumb__content__wraper" data-aos="fade-up">
            <div className="breadcrumb__title">
              <h4 className="heading" style={{color: '#fff', fontWeight: 'bold', fontSize: '50px'}}>Portfolio Page</h4>
            </div>
            <div className="breadcrumb__inner">
              <ul>
                <li><Link style={{color: '#fff'}} to="/">Home</Link></li>
                <li style={{color: '#fff'}}>Portfolio page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape__icon__2">
      <img loading="lazy" className=" shape__icon__img shape__icon__img__1" src="img/herobanner/herobanner__1.png" alt="photo" />
      <img loading="lazy" className=" shape__icon__img shape__icon__img__2" src="img/herobanner/herobanner__2.png" alt="photo" />
      <img loading="lazy" className=" shape__icon__img shape__icon__img__3" src="img/herobanner/herobanner__3.png" alt="photo" />
      <img loading="lazy" className=" shape__icon__img shape__icon__img__4" src="img/herobanner/herobanner__5.png" alt="photo" />
    </div>
  </div>
  {/* breadcrumbarea__section__end*/}
      <div className="gridarea gridarea__2">
        <div className="container">
          <div className="row grid__row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-up">
              <div className="section__title__2">
                <div className="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                  <h4>Our Latest Incredible Client's Projects</h4>
                </div>
              </div>
            </div>

            <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12" data-aos="fade-up">
              <div className="gridfilter_nav grid__filter__2 gridFilter">
                <button
                  className={activeFilter === '*' ? 'active' : ''}
                  onClick={() => handleFilterClick('*')}
                >
                  See All
                </button>
                <button
                  className={activeFilter === 'filter1' ? 'active' : ''}
                  onClick={() => handleFilterClick('filter1')}
                >
                  Web Development
                </button>
                <button
                  className={activeFilter === 'filter2' ? 'active' : ''}
                  onClick={() => handleFilterClick('filter2')}
                >
                  Android Development
                </button>
                <button
                  className={activeFilter === 'filter3' ? 'active' : ''}
                  onClick={() => handleFilterClick('filter3')}
                >
                  Software Development
                </button>
                <button
                  className={activeFilter === 'filter4' ? 'active' : ''}
                  onClick={() => handleFilterClick('filter4')}
                >
                  Graphics
                </button>
              </div>
            </div>
          </div>

          <div className="row grid" data-aos="fade-up">
            {filteredCourses.map((course, index) => (
              <div key={index} className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item ${course.filters.join(' ')}`}>
                <div className="gridarea__wraper">
                  <div className="gridarea__img">
                    <a href="course-details.html">
                      <img loading="lazy" src={course.image} alt="grid" />
                    </a>
                    <div className="gridarea__small__button">
                      <div className={`grid__badge ${course.badgeColor}`}>{course.category}</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#"><i className="icofont-heart-alt"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const courses = [
  {
    image: "img/grid/grid_1.png",
    category: "Data & Tech",
    badgeColor: "",
    filters: ["filter1"],
  },
  {
    image: "img/grid/grid_2.png",
    category: "Mechanical",
    badgeColor: "blue__color",
    filters: ["filter2"],
  },
  {
    image: "img/grid/grid_3.png",
    category: "Development",
    badgeColor: "pink__color",
    filters: ["filter3"],
  },
  {
    image: "img/grid/grid_4.png",
    category: "Ui & UX Design",
    badgeColor: "green__color",
    filters: ["filter4"],
  },
  {
    image: "img/grid/grid_5.png",
    category: "Data & Tech",
    badgeColor: "orange__color",
    filters: ["filter4"],
  },
  {
    image: "img/grid/grid_6.png",
    category: "Big Data",
    badgeColor: "yellow__color",
    filters: ["filter4"],
  }
];
