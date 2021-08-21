import React from 'react';
const Header = () => {
    return ( 
        <>
          
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"></h1>
    

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#home">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#area-of-interest">Area of Interest</a></li>
          <li><a className="nav-link scrollto " href="#my-project">My Projects</a></li>
          {/* <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
         
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
        
        </>
     );
}
 
export default Header;