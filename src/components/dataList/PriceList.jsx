import React from 'react'
import { Link } from 'react-router-dom';

const PriceList = () => {
  return (
    <div className="row gy-4 mb-5 mt-4">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 align-self-center">
            <div className="w-100 h-100 py-5 px-4" style={{/*border: '1px solid white', */borderRadius: 10, backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.09), rgba(255,255,255,0.17))', backdropFilter: 'blur(10px)'}}>
        <p className="text_small text-white-50 mb-0">Basic</p>
        <h2 className="text-break mb-2 mt-0">$29.99<small className="text-white-50">/month</small></h2>
        <p className="text-white-50">Basically for the singles! self love and care is key, RIGHT!</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>1 allowed user</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>Unlimited movies and Tv shows</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>watch on tablet and laptop</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-danger">
            <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>Watch offline</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-danger">
            <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>4k available</p>
        <div className="mt-4"><Link className="btn btn-outline-primary btn-lg w-100" to="/register">Subscribe</Link></div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 align-self-center">
            <div className="w-100 h-100 py-5 px-4" style={{/*border: '1px solid white', */borderRadius: 10, backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.09), rgba(255,255,255,0.17))', backdropFilter: 'blur(10px)'}}>
            <p className="text_small text-white-50 mb-0">standard</p>
            <h2 className="text-break mb-2 mt-0">$59.99<small className="text-white-50">/month</small></h2>
            <p className="text-white-50">Best for chilling! Be careful though, we don't offer birth control too.</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>1 allowed user</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>Unlimited movies and Tv shows</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>watch on tablet and laptop</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>Watch offline</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-danger">
                <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>4k available</p>
            <div className="mt-4"><Link className="btn btn-primary btn-lg w-100 border-0" to="/register">Subscribe</Link></div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 align-self-center">
            <div className="w-100 h-100 py-5 px-4" style={{/*border: '1px solid white', */borderRadius: 10, backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.09), rgba(255,255,255,0.17))', backdropFilter: 'blur(10px)'}}>
            <p className="text_small text-white-50 mb-0">Ultra</p>
            <h2 className="text-break mb-2 mt-0">$99.99<small className="text-white-50">/month</small></h2>
            <p className="text-white-50">The Family is here for the occation or maybe you are just chilling with friends! Here you go.</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>10 allowed user</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>Unlimited movies and Tv shows</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>watch on tablet and laptop</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>Watch offline</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1 text-success">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>4k available</p>
            <div className="mt-4"><Link className="btn btn-outline-primary btn-lg w-100" to="/register">Subscribe</Link></div>
            </div>
        </div>
    </div>
  )
}

export default PriceList;