import React from 'react';
import { Link } from 'react-router-dom';

const ShowsBanner = () => {
    return (
        <header className="w-100 banner position-relative" style={{backgroundImage: 'url(https://html.nkdev.info/fliqs/assets/images/tv-shows/show-7-390x440.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}><img className="w-100 h-100 d-none" src="https://image.shutterstock.com/image-photo/bangkok-thailand-july-12019-setting-600w-1439644991.jpg" alt="tvshows_banner" />
            <div className="h-100 w-100 banner-overlay d-flex">
                <div className="hero-banner-content p-4">
                    <h1 className="mb-1">TV SHOWS</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><span>Home</span></Link></li>
                        <li className="breadcrumb-item active"><span>Tv shows</span></li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default ShowsBanner