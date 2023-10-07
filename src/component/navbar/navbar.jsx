/* eslint-disable prettier/prettier */
import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   console.log('Is Open ===> ', isOpen);

   return (
      <>
         <div className="nav-bar">
            <div className="logo">
               <p>
                  <a href="#">Farmino🧑‍🌾</a>
               </p>
            </div>

            <div className="search-tab  toggle">
               <input
                  type="search"
                  placeholder="what will you like for dinner tonight?"
               />
            </div>

            <div className="nav-links  toggle">
               <ul className="nav-pages ">
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
            <div className="logins toggle">
               <ul>
                  <li className="sign-in ">
                     <a href="#">Sign in</a>
                  </li>
                  <li className="sign-up ">
                     <a href="#">SIgn up</a>
                  </li>
               </ul>
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
               <div className="menu-icon-bar"></div>
               <div className="menu-icon-bar"></div>
               <div className="menu-icon-bar"></div>
            </button>
         </div>

         {isOpen ? (
            <div className=" mobile-nav">
               <div className="mobile-search-bar">
                  <input
                     type="search"
                     placeholder="what will you like for dinner tonight?"
                  />
                  <button type="button" className="cancel-btn">
                     cancel
                  </button>
               </div>
               <ul className=" mobile-link">
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
               <hr />

               <div className="logins mobile-logins">
                  <ul>
                     <li className="sign-in ">
                        <a href="#">Sign in</a>
                     </li>
                     <li className="sign-up ">
                        <a href="#">SIgn up</a>
                     </li>
                  </ul>
               </div>
            </div>
         ) : (
            <></>
         )}
      </>
   );
};

export default Navbar;
