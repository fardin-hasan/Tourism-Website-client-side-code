import React from 'react';


import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Packages from '../Packages/Packages';
import WhyTravel from '../WhyTravel/WhyTravel';

import './Home.css'


const Home = () => {
  return (
    <div id="home" className=''>
      <div >
        <img className='image' src="https://freedesignfile.com/upload/2016/11/Travel-Concepts-on-the-desktop-HD-picture.jpg" alt="" />
      </div>


      <div>
        <Packages></Packages>
        <WhyTravel></WhyTravel>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>

      </div>



    </div>
  );
};

export default Home;