/* eslint-disable prettier/prettier */
import './hero.css';

const HeroSection = () => {
   return (
      <>
         <div className="hero-container">
            {/* left text area of hero section */}
            <div className="startup-section">
               <h2>Delicious and fresh produce from farmers</h2>
               <p>
                  Buy local fruits and vegetable herbs, meat and fish, and diary
                  products delivered in your city
               </p>

               <div className="hero-btn">
                  <button type="button" className="startup-btn">
                     Get Started
                  </button>
                  <button type="button" className="sales-btn">
                     Sell with Us
                  </button>
               </div>
            </div>
            {/* right side of hero with farmer */}
            <div className="farmer-img">
               {/* <img
                   src="src\assets\senior-woman-with-vegetables.png"
                   alt="farmer photo"
                /> */}
            </div>
         </div>
      </>
   );
};

export default HeroSection;
