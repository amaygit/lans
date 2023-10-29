import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
                src={IntroImg} alt="IntroImg"
            />
        </div>
        <div className="content">
            <p>Innovation Meets Imagination</p>
            <h1>Crafting Intelligence In Every <span>Byte</span></h1>
            <div>
                <Link to="/project" className="btn">
                        Projects
                </Link>
                <Link to="/contacts" className="btn btn-light">
                        Intern
                </Link>
            </div>
        </div>

        </div>
  )
}

export default HeroImg