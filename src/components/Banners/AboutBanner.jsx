import React from 'react';
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <header className="w-100 banner position-relative" style={{backgroundImage: 'url(https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className="h-100 w-100 banner-overlay d-flex">
            <div className="hero-banner-content p-4">
                <h1 className="mb-1">ABOUT US</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><span>Home</span></Link></li>
                    <li className="breadcrumb-item active"><span>About</span></li>
                </ol>
            </div>
        </div>
    </header>
  )
}

export default AboutBanner