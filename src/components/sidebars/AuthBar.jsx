import React from 'react';
import { Link } from "react-router-dom";

const AuthBar = () => {
  return (
    <aside id="leftbar" className="d-flex justify-content-center align-items-center leftbar">
            <div className="overflow-hidden">
                <ul className="profile_navlist">
                    <li style={{backdropFilter: 'opacity(1) blur(0px)', filter: 'blur(0px)'}}><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tvshows">Tv shows</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><a href="mailto:codemonga@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <button className="btn position-absolute text-light profilebar_close" type="button" style={{top: 20, right: 20}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1" style={{fontSize: 30}}>
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <p className="position-absolute text_small text-white-50" style={{bottom: 10}}>Developed by <a href="https://codemonga.bss.design" target="_blank" rel="noopener noreferrer">@codemonga</a></p>
        </aside>
  )
}

export default AuthBar;