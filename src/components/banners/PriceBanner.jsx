import React from 'react'

const PriceBanner = () => {
  return (
    <header data-bss-scroll-zoom="true" data-bss-scroll-zoom-speed={1} className="w-100 banner position-relative" style={{backgroundImage: 'url(https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className="h-100 w-100 banner-overlay d-flex">
            <div className="hero-banner-content p-4">
            <h1 className="mb-1">PRICING PLAN</h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/"><span>Home</span></a></li>
                <li className="breadcrumb-item active"><span>Pricing</span></li>
            </ol>
            </div>
        </div>
    </header>

  )
}

export default PriceBanner



