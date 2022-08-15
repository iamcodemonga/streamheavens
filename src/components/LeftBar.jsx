import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftBar = () => {
    return (
        <aside id="sidebar" className="d-flex justify-content-center align-items-center">
            <div className="overflow-hidden">
                <ul className="nav_list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/tvshows">Tv shows</NavLink></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><a href="mailto:support@streamHeavens.com" target="_blank" rel='noopener noreferrer'>Contact</a></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            <button className="btn position-absolute text-light d-lg-none menubar_close" type="button" style={{top: '20px',right: '20px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1" style={{fontSize: '30px'}}>
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
            <p className="position-absolute text_small text-white-50" style={{bottom: '10px'}}>Developed by <a href="https://twitter.com/codemonga" target="_blank" rel='noopener noreferrer'>@codemonga</a></p>
        </aside>
    )
}

export default LeftBar;