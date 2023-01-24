import React from 'react'
import { Link } from "react-router-dom";

const PricingBanner = () => {
  return (
        <header className="w-100 banner position-relative" style={{backgroundImage: 'url(https://images.pexels.com/photos/7991781/pexels-photo-7991781.jpeg?auto=compress&cs=tinysrgb&w=1600)', backgroundPosition: 'top', backgroundSize: 'cover'}}>
            <div className="h-100 w-100 banner-overlay d-flex">
                <div className="hero-banner-content p-4">
                    <h1 className="mb-1">PRICING PLAN</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><span>Home</span></Link></li>
                        <li className="breadcrumb-item active"><span>Pricing</span></li>
                    </ol>
                </div>
            </div>
        </header>
  )
}

export default PricingBanner