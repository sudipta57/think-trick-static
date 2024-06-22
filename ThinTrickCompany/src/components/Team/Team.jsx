import Homeslider from "../home_slider/Homeslider";
import Facultypage from "./Facultypage";

export default function Team() {
  const slidesData = [
    {
      heading: "OUR TEAM",
      title: "MEET OUR TEAM",
      imgSrc: "img/gallery/ai_1.jpg",
      background: "img/herobanner/ai_1.jpg",
      articlePosition: "01",
    },
    {
      heading: "EDUCATION SOLUTION",
      title: "Best IT Services \n For Your Business",
      imgSrc: "img/gallery/ai_2.jpg",
      background: "img/herobanner/university_1.jpg",
      articlePosition: "02",
    },
    {
      heading: "EDUCATION SOLUTION",
      title: "Best IT Services \n For Your Business",
      imgSrc: "img/gallery/ai_3.jpg",
      background: "img/herobanner/university_3.jpg",
      articlePosition: "03",
    },
  ];
  return (
    <>
      <Homeslider slidesData={slidesData} />
      <Facultypage />
    </>
  );
}
