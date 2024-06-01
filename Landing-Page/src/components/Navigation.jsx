import React from "react";
import "./Navigation.css"

const Navigation = () => {
   return (
      <nav className="navbar container">
         <div className="LogoImage">
            <img src="./../../public/images/brand_logo.jpg" alt="logo.jpg" />
         </div>

         <div className="menuItems">
            <ul>
               <li>Menu</li>
               <li>Location</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </div>

         <div>
            <button className="LoginButton">Login</button>
         </div>
      </nav>
   );
};

export default Navigation;
