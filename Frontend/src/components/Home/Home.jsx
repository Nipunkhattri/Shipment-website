import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import face from "../../assests/facebook.png"
import insta from "../../assests/insta.png"
import twitter from "../../assests/twitter.png"
import email from "../../assests/mail.png"
import Phone from "../../assests/Phone.png"
import logo from "../../assests/logo.png"
import image from "../../assests/image.png"
import image1 from "../../assests/box.png"

// import React from 'react'

const Home = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        console.log("hello world")
        navigate("/login");
    }
  return (
    <>
        {/* --top header */}
        <div className="header-top">
            <div className="header-top-left">
                <div className='img'>
                <img src={face} alt="" />
                </div>
                <div className='img'>
                <img src={insta} alt="" />
                </div>
                <div className='img'>
                <img src={twitter} alt="" />
                </div>
            </div>
            <div className="header-top-right">
                <div className="email">
                    <img src={email} alt=""  className='imgemail'/>
                    <p>Shipperemail.com</p>    
                </div>
                <div className="phone">
                    <img src={Phone} alt=""  className='imgphone'/>
                    <p>+91 8267056217</p>    
                </div>
            </div>
        </div>
        <div className="navbar1">
            <div className="logo">
            <img src={logo} alt="" />
            <h3>Shipper
            Solution</h3>
            </div>
            <div className='uulll'>
            <ul>
                <li>Home</li>
                <li>How it works</li>
                <li>About</li>
                <li>Services</li>
                <li>Contacts</li>
            </ul>
            </div>
            <button className='lg' onClick={handleclick}>Logierwrtn</button>
            <button className='sg' onClick={()=>{navigate("/signup")}} >Sign Up</button>
        </div>
    <div className='home'>
        <div className="r">
            <div className='r1'>
            <h2>
            We Are Top Shipping Services In Worldwide
            </h2>
            <p>Customer can track their product by simply writing their Customer id below</p>
            <input type="" className='input'/>
            <br></br>
            <button className='btn'>Submit</button>
            </div>
        </div>
        <div className="l">
            <img src={image1} className='image1' alt="" />
            {/* <img src={image} className="image2" alt="" /> */}
        </div>
    </div>
    </>
  )
}

export default Home