import React from "react";
import img1 from './icons8-instagram-60.png'
import img2 from './icons8-facebook-60.png'
import img3 from './icons8-linkedin-circled-60.png'

const Footer = () => (
  <div className="footer">
    <h4>Contact List</h4>
            <p>91+9889965738</p>
            <img src={img1} alt="logo insta"></img>
            <img src={img2} alt="logo facebook"></img>
            <img src={img3} alt="logo linkedin"></img>
            
  </div>
);

export default Footer;