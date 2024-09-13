import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
            <p>Swadeshi<span>Hub</span></p>
      </div>
      <ul className='footer-links'>
        <li>COMPANY</li>
        <li>PRODUCTS</li>   
        <li>OFFICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className='footer-copyright'><hr />
            <p>Copyright @2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
