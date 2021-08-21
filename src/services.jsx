import React from 'react';
const Services = () => {
    return (<>
     <section id="area-of-interest" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
              Area of interest
              </h3>
              {/* <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p> */}
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
              <img src="img/webdesign.svg" alt="webdesign" width="200px"/>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
              <img src="img/webdevelopment.svg" alt="webdevelopment" width="200px"/>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                {/* <span className="ico-circle"><i className="bi bi-bar-chart"></i></span> */}
                <img src="img/photography.svg" width="200px"/>
              </div>
              <div className="service-content">
                <h2 className="s-title">Photography</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
              <img src="img/responsive.svg" alt="graphic" width="170px"/>
              </div>
              <div className="service-content">
                <h2 className="s-title">Responsive Design</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
              <img src="img/graphic.svg" alt="graphic" width="140px"/>
          
              </div>
              <div className="service-content">
                <h2 className="s-title">Graphic Design</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
              <img src="img/mobile-app.svg" alt="graphic" width="170px"/>
              </div>
              <div className="service-content">
                <h2 className="s-title">Mobile App</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>  );
}
 
export default Services;