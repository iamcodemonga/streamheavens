import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
        <div id="topbar" className="py-3 px-3 w-100">
            <nav className="navbar navbar-dark p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary fw-bold brand_name" to="/">STREAMHEAVENS</Link>
                    <div className="d-flex">
                        {/* <Link className="btn d-flex text-light px-0 me-2" role="button" to="/register">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: 23}}>
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="d-none d-lg-block ms-1">register</span>
                        </Link> */}
                        <Link className="btn d-flex align-items-center me-1 text-light px-0 me-2" to={"/codemonga"}>
                            <div className="d-flex justify-content-center align-items-center" style={{width: 25, height: 25, clipPath: 'circle()', backgroundColor: 'white'}}> 
                                <img width="21px" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="21px" style={{objectFit: 'cover', clipPath: 'circle()'}} alt="Profile_picture" />
                            </div><span className="d-none d-lg-block ms-2">account</span>
                        </Link>
                        <button className="btn p-0 d-lg-none menubar" type="button">
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

export default MainNav