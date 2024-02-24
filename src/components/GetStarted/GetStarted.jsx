import "./GetStarted.css";

import React from "react";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerwidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">
            Subscribe and find attractive price quotes
            <br /> Find Your Residence soon
          </span>

          <button className='button'>
          <a href= 'mailto:NormalizedNerd@gmail.com'>Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
