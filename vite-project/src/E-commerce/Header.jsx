import React from 'react'
import styles from "./Header.css"
function Header() {
  return (
<header className="header">
    <div className="contact-info">
      <span><img src="vite-project/public/Images/Vector (1).png" alt="" />(225) 555-0118</span>
      <h5>michelle.rivera@example.com</h5>
    </div>
    <div className="promo">
    <h4> Follow Us and get a chance to win 80% off</h4> 
    </div>
    <div className="social-media">
      <h6>Follow Us:</h6>
      <a href="#facebook"><img src="./public/Images/a.png" alt="" /></a>
      <a href="#instagram"> <img src="./public/Images/icn settings icn-xs (2).png" alt="" /></a>
      <a href="#twitter"><img src="./public/Images/icn settings icn-xs.png" alt="" /></a>
      <a href="#youtube"><img src="./public/Images/icn settings icn-xs (1).png" alt="" /></a>
    </div>
  </header>
);

}

export default Header