import React from 'react';
import "./home.css"
import Myphoto from "../../assets/myphoto.jpg" 
import Headersocial from './headersocial';


const Home = () => {
  return (
    <>

    <div className='homepage' id = "home">
    <img src={Myphoto} alt="ok" className="home__page" />
    <h1>ROHIT SINGH</h1>
    <span className="education">A Front-End Developer</span>
    <Headersocial/>
    <a href="#contact">
      <button className="contactme">contact me</button></a>
    </div>
    </>
  )
}
export default Home