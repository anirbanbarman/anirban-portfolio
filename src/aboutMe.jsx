import React from 'react';
const AboutMe = () => {
    return ( <>
     <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full" style={{boxShadow: "8px 11px 18px #b3b3b3, -30px -30px 43px #f5f5f5a6"}}>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="img/profile.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Anirban Barman</span></p>
                        <p><span className="title-s">Profile: </span> <span>Full stack Developer</span></p>
                        <p><span className="title-s">Email: </span> <span>anirbanee247@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>8906349763</span></p>
                        <p><span className="title-s">Github: </span> <span ><a style={{color:"blue"}} href="https://github.com/anirbanbarman">https://github.com/anirbanbarman</a></span></p>
                        
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">SKILL</p>
                    <span>JAVASCRIPT</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:"75%",backgroundColor:"green"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{backgroundColor:"orange", width:"50%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>HTML</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{backgroundColor:"orange",width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>ANGULAR 2+</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:"75%",backgroundColor:"green"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><span>REACT.JS</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{backgroundColor:"green",width:"70%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><span>NODE.JS</span> <span className="pull-right">65%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:"65%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><span>REDUX</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:"60%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><span>NGRX/STORE</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{backgroundColor:"green",width:"70%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><span>TYPESCRIPT</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{backgroundColor:"green",width:"70%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                     Hey,<br/>
                     you have read my resume right? if your answer is "no" then you are at the right place to know about me 😜😋(honest wala).
                     My nick name is Titun.I pursued my bachelor degree in Electrical Engineering from Haldia Institute of Technology (BTech EE).
                     In my college days I hate coding beacuse of loops😇 but now a days I am loving it 👨‍💻.
                    </p>
                    <p className="lead">
                    Technically I am an experienced IT professional having almost 5 years of experience but to be very honest my relevent experience
                    in IT industry is 3 years 🙏🏻 ✌🏻.
                    </p>
                    <p className="lead">
                      I am in love with <i><b>Javascript</b></i>. and I believe Javascript is the Mother 👩‍👦‍👦 of all js frameworks and libraries.

                    </p>
                    <p className="lead">
                     Currenly I am learning React navite ⚛️,Ionic framework,Vue and Next.js

                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </> );
}
 
export default AboutMe;