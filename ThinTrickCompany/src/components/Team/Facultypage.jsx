import { FaFacebook, FaTwitter } from "react-icons/fa6";
import FacultyCard from "./FacultyCard";
import { GrInstagram } from "react-icons/gr";

const Facultypage = () => {
  const CeoInfo = [
    {
      name: "Debabrata Bera",
      image: "img/gallery/kids_1.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
  ];
  const teamInfo = [
    {
      name: "Pinaki Sasmal",
      image: "img/gallery/kids_2.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
    {
      name: "Sudipta Ghorami",
      image: "img/gallery/kids_3.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
    {
      name: "Debabrata Bera",
      image: "img/gallery/kids_1.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
    {
      name: "Debabrata Bera",
      image: "img/gallery/kids_1.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
    {
      name: "Debabrata Bera",
      image: "img/gallery/kids_1.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
    {
      name: "Debabrata Bera",
      image: "img/gallery/kids_1.jpg",
      qualification: "M.Tech",
      socialmedia: [
        {
          link: "facebook.com",
          icon: <FaFacebook />,
        },
        {
          link: "twitter.com",
          icon: <FaTwitter />,
        },
        {
          link: "instagram.com",
          icon: <GrInstagram />,
        },
      ],
    },
  ];
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="ceo-section">
          <h1 className="text-center">MEET OUR CEO</h1>
          {CeoInfo.map((info, index) => (
            <FacultyCard info={info} key={index} />
          ))}
        </div>
        <div className="team-section" style={{ paddingTop: "50px" }}>
          <h1 className="text-center">MEET OUR TEAM MEMBERS</h1>
          <div className="row g-4 py-5">
            {teamInfo.map((info, index) => (
              <div className="col-md-4" key={index}>
                <FacultyCard info={info} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facultypage;
