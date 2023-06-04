import React from "react";
import "./home.css";
import Myphoto from "../../assets/my photo.jpg";
import Headersocial from "./headersocial";

const Home = () => {

  return (
    <>
      <div className="homepage" id="home">
        <div className="start">
        <i class="fa-solid fa-arrow-left"></i>
        <h3 className="infoMore">
          click the links in the left section for more INFORMATION
        </h3>
        </div>
        <img src={Myphoto} alt="ok" className="home__page" />
        <h1 className="hello">ROHIT SINGH</h1>
        <span className="education">I Develop Web and Mobile Apps</span>
        <Headersocial />
        <a href="#contact">
         <a href="mailto:rohit9804singh@gmail.com"  class="contactme">contact me</a>
        </a>
      </div>
    </>
  );
};
export default Home;
