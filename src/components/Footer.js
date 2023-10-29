import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa"
import "./FooterStyles.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>Outer Ring Road, Marathalli</p>
              <p>Bengaluru.</p>
            </div>
          
          </div>
          
      

          <div className='email'>
              <h4>
                
          <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
          <a href="mailto:bytecraftlabbs@gmail.com"> 
          bytecraftlabbs@gmail.com
        </a>
                </h4>            
          </div>
        </div>
        <div className='right'>
        {/* <h4>About the company</h4>
            <p>This is me Amay, CEO & Founder of ByteCode. For any queries feel free contact us</p> */}
            <h4>About the Company</h4>
<p>Welcome to ByteCraft-Labs, where we are committed to excellence. Our mission is to provide you with outstanding service and solutions. For any inquiries, please do not hesitate to get in touch with our team.</p>

<div className='social'>
       <a href='https://www.linkedin.com/company/bytecraftlabs/'><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/> </a>
        {/* <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        
        <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer