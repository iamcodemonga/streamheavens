import React from 'react'
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div id="auth_bar" className="py-3 px-3 w-100">
                    <nav className="navbar navbar-dark p-3">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-primary fw-bold brand_name" to="/">STREAMHEAVENS</Link>
                            <div className="d-flex">
                                <Link className="btn d-flex text-light px-0" role="button" to="/login"><span className="d-none d-lg-block ms-1">login</span></Link>
                                <Link class="btn text-light px-0" role="button" to="/register"><span className="d-none d-lg-block ms-1">|</span></Link>
                                <Link className="btn d-flex text-light px-0 me-2" role="button" to="/register"><span className="d-none d-lg-block ms-1">register</span></Link>
                                <div className="dropstart pt-2 px-1 d-lg-none">
                                    <Link aria-expanded="false" data-bs-toggle="dropdown" className="auth-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="auth-icon">
                                            <path d="M18 9V12M18 12V15M18 12H21M18 12H15M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21H3V20Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>&nbsp;
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-dark">
                                        <Link className="dropdown-item" to="/login">login</Link>
                                        <Link className="dropdown-item" to="/register">register</Link>
                                    </div>
                                </div>
                                <button className="btn p-0 profile_menubar" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="text-light" style={{fontSize: 35}}>
                                        <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
  )
}

export default AuthNav