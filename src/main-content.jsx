import React from 'react';
import AboutMe from './aboutMe';
import Services from './services';
import Portfolio from './portfolio';
// import Section from './section';
// import Testimonial from './testimonial';
// import Blog from './blog';
// import Contact from './contact';

const MainContent = () => {
    return ( <div id="main" >
    <AboutMe/>
    <Services/>
    {/* <Section/> */}
    <Portfolio/>
    {/* <Testimonial/> */}
    {/* <Blog/>
    <Contact/> */}

   
   
    </div> );
}
 
export default MainContent;