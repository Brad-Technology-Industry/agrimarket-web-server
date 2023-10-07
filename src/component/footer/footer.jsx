/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import './footer.css';
const Footer = () => {
   // eslint-disable-next-line prettier/prettier
   return (
      <>
         {/* Footer  */}
         <footer>
            <div className="footer-container">
               {/* subscription to newsletter div */}
               <div className=" subscription-box">
                  <div className="subscription-text">
                     <p className="subscription-text-bold">
                        <h2> Subscribe to the newsletter</h2>
                     </p>
                     <p>
                        <span className="subscription-text-p">
                           you will get a 20% discount on your first order
                        </span>
                     </p>
                  </div>

                  {/* input and button for subscription */}
                  <div className="subscription-input-box">
                     <input type="email" placeholder="Enter your email" />
                     <button type="button">Subscribe</button>
                  </div>
               </div>

               {/* Farmino features, solution and contact section */}
               <div className=" footer-details">
                  {/* section for farmino text */}
                  <div className="info-boxes footer-text">
                     <h5>FARMINO</h5>
                     <p>
                        Best place for order food from farmers. vegetables and
                        products directly from the farm to your door. Serve as a
                        link to between farmers and customers, by providing a
                        platform for farmers and cooperatives to enjoy their
                        hand work with a readily available market
                     </p>

                     {/* footer icons */}
                     <ul className="footer-icons">
                        <li>
                           <a href="#">11</a>
                        </li>
                        <li>
                           <a href="#">22</a>
                        </li>
                        <li>
                           <a href="#">33</a>
                        </li>
                     </ul>
                  </div>
                  {/* feaures and solution  */}
                  <div className="info-boxes features-solutions">
                     <div className="features">
                        <ul>
                           <h5>Features</h5>
                           <li>
                              <a href="#">Home</a>
                           </li>
                           <li>
                              <a href="#">Products</a>
                           </li>
                           <li>
                              <a href="#">Testimonies</a>
                           </li>
                           <li>
                              <a href="#">Contact</a>
                           </li>
                        </ul>
                     </div>

                     <div className="solutions">
                        <ul>
                           <h5>Solution</h5>
                           <li>
                              <a href="#">FAQs</a>
                           </li>
                           <li>
                              <a href="#">Privacy Policy</a>
                           </li>
                           <li>
                              <a href="#">Terms and Condition</a>
                           </li>
                           <li>
                              <a href="#">Blog</a>
                           </li>
                        </ul>
                     </div>
                  </div>

                  {/* contact info */}
                  <div className="info-boxes contact">
                     <ul>
                        <h5>Contact </h5>
                        <li>
                           <a href="#">First Trust, Buea Cameron</a>
                        </li>
                        <li>
                           <a href="#">+237 670 000 000</a>
                        </li>
                        <li>
                           <a href="#">office@farmino.com</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <p className="copyright">&copy; 2022 FARMINO All Rights Reserved</p>
         </footer>
      </>
   );
};

export default Footer;
