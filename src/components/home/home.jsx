import React from 'react';
import "./home.css"
import Myphoto from "../../assets/myphoto.jpg" 
import Headersocial from './headersocial';


const Home = () => {
  return (
    <>

    <div className='homepage'>
    <img src={Myphoto} alt="my photo" className="home__page" />
    <h1>ROHIT SINGH</h1>
    <span className="education">A Front-End Developer</span>
    <Headersocial/>
    </div>
    </>
  )
}
export default Home