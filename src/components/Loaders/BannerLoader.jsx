import React from 'react';
import { Link } from 'react-router-dom';

const BannerLoader = () => {
    return (
        <header className="w-100 hero-banner position-relative" style={{backgroundImage: `url(https://sushihousemenu.com/Media/Default/Menu%20Items/placeholder.png)`, backgroundPosition: 'top', backgroundSize: 'cover'}}>
            <img className="w-100 h-100 d-none" src="https://image.shutterstock.com/image-photo/bangkok-thailand-july-12019-setting-600w-1439644991.jpg" alt="homebanner_image" />
            <div className="h-100 w-100 banner-overlay d-flex">
                <div className="hero-banner-content p-4">
                    <span className="badge bg-primary me-2">_____</span><span className="badge bg-primary me-2">_____ 0.0</span>
                    <h1 className="mb-1">________</h1>
                    <p className="text_small text-white-50">________: __________</p>
                    <p className='text-break'>___________________________________________________________________________________________________________________________</p>
                    <Link className="btn btn-primary bg-primary border-0 mt-2 px-4" role="button" to="screen" onClick={(e) => e.preventDefault}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                            <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>Watch now
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default BannerLoader