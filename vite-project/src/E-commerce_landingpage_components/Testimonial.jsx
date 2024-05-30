
import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>What they say about us</h2>
      <div className="testimonial-content">
        <img
          src='/public/Images/#user.1 (2).png'
          alt="Regina Miles"
          className="testimonial-image"
        />
        <div className="testimonial-text">
          <div className="testimonial-rating">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </div>
          <h6>
            Plate helps you see how many more days you need to work to reach
            your financial goal.
          </h6>
          <div className="testimonial-author-role">
         <a href="#Reginal"  className="testimonial-author">Reginal Miles</a>
          <span className="testimonial-role">Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;