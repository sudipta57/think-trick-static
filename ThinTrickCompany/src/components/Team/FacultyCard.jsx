/* eslint-disable react/prop-types */
const FacultyCard = ({ info }) => {
  const cardStyle = {
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    width: "300px", // Fixed width
    height: "400px", // Fixed height
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
  };

  const imgStyle = {
    transition: "transform 0.3s ease-in-out",
    width: "100%", // Ensure the image fits the card width
    height: "auto", // Maintain aspect ratio
  };

  const imgHoverStyle = {
    transform: "scale(1.05)",
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <div
        className="team-item bg-light"
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = cardHoverStyle.transform;
          e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        <div className="overflow-hidden">
          <img
            className="img-fluid"
            src={info.image}
            alt=""
            style={imgStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = imgHoverStyle.transform)
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
          />
        </div>
        <div
          className="position-relative d-flex justify-content-center"
          style={{ marginTop: "-23px" }}
        >
          <div className="bg-light d-flex justify-content-center pt-2 px-1">
            {info.socialmedia.map((social) => (
              <a
                className="btn btn-sm-square btn-primary mx-1"
                href={social.link}
                key={social.link}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center p-4">
          <h5 className="mb-0">{info.name}</h5>
          <small>{info.qualification}</small>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
