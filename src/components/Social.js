import React from 'react'
import img1 from './icons8-instagram-60.png'
import img2 from './icons8-facebook-60.png'
import img3 from './icons8-linkedin-circled-60.png'

export default function Social() {
  return (
    <>
    <h4>You can reach us on the following places</h4>
    <p>Click the images to go the site</p>
    <a href="https://www.instagram.com/"><img src={img1} alt="logo insta"></img></a> 
    <a href="https://www.facebook.com/"><img src={img2} alt="logo facebook"></img></a>
    <a href="https://www.linkedin.com/"> <img src={img3} alt="logo linkedin"></img></a>
   
    </>
  )
}
