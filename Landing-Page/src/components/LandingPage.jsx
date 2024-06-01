import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
   return (
      <div className="herocontainer">
         <div className="heroContainer">
            <div className="hero-text">
               <p className="heroH1">YOUR FEET DESERVE THE BEST</p>
               <p className="herop">
                  YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
                  WE’RE HERE TO HELP YOU WITH OUR SHOES.
               </p>
               <div className="hero-btn">
                  <button className="shopnow">Shop Now</button>
                  <button className="category">Category</button>
               </div>
               <p className="affiliate">Also Available On:</p>
               <div className="">
                  <img src="./../../public/images/flipkart.png" alt="flipkart" />
                  <img className="amazonLogo" src="./../../public/images/amazon.png" alt="amazon" />
               </div>
            </div>
            <div className="hero-image">
               <img src="./../../public/images/shoe_image.png" alt="shoes" />
            </div>
         </div>
      </div>
   );
};

export default LandingPage;
