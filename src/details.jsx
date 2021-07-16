
import React from 'react';
import Typed from 'typed.js';
const Details = () => {

    // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
    // Create reference to store the Typed instance itself
      const typed = React.useRef(null);
      React.useEffect(() => {
        const options = {
            strings: [
            'Designer', 
            'Developer',
            'Freelancer',
            'Photographer'
            
          ],
          typeSpeed: 80,
          loop:true
          
       
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        }
      }, [])
      
    return ( 
        <>
         <div id="hero" className="hero route bg-image" style={{backgroundImage:"url(img/myphoto.jpg)"}}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container" style={{marginTop:'22em'}}>
 
          <h1 className="hero-title mb-4">I am Anirban Barman</h1>
          <p className="hero-subtitle"><span  ref={el} ></span></p>
        </div>
      </div>
    </div>
  </div>
        </>
     );
}
 
export default Details;
