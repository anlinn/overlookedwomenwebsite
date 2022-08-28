import React, { useState, useEffect, useRef } from "react";
import "./GalleryWomanDetail.scss";
//import Draggable from "react-draggable";


const GalleryWomanDetail = ({ displayedWoman }) => {
  // Remove WomanDetail from DOM on click outside of the WomanDetail-Component

  
  // Close the component on click on element outside of it
  
  return (
    <div >
        
        <div className={`gal-card info ${displayedWoman.category} `} id={`${displayedWoman.name.toLowerCase().replaceAll(" ","-")}`}>
          <div className="gal-row ">
            <div className="gal-column image-side ">
              
              <div className="flip-image-card" >
                
              <div className="image-front">
                
                <img className="gal-card-image " src={displayedWoman.img_src}  />
                {displayedWoman.img_credit ? (  <p className="credit-line"> {displayedWoman.img_credit}</p>) : null }
                
              </div>
              <div className="image-back">
                <div className="image-wrapper">
                <img className="gal-card-image" src={displayedWoman.icon_src}/>
                </div>
              </div>
              </div>
            </div>
            <div className="gal-column text-side">
              <div className="content">
                <a className="gal-header ">{displayedWoman.name}</a>
                <div className="gal-meta  ">
                  {displayedWoman.lifespan}
                </div>
                <div className="gal-description">
                  <p>{displayedWoman.description}</p>
                </div>
                <div className="gal-link-box">
                  <a className="gal-link" href={displayedWoman.link}>
                    Learn more about her !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>





        
    </div>
  );

  
};

export default GalleryWomanDetail;
