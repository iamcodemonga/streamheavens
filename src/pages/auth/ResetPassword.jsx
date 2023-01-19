import { Link } from "react-dom";
import "../../asset/css/auth.css";

const ResetPassword = () => {
    return <>
        <aside id="leftbar" className="d-flex justify-content-center align-items-center leftbar">
            <div className="overflow-hidden">
                <ul className="profile_navlist">
                    <li style={{backdropFilter: 'opacity(1) blur(0px)', filter: 'blur(0px)'}}><Link to="/">Home</Link></li>
                    <li><Link to="movies">Movies</Link></li>
                    <li><Link to="tvshows">Tv shows</Link></li>
                    <li><Link to="pricing">Pricing</Link></li>
                    <li><a href="mailto:support@streamHeavens.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </div>
            <button className="btn position-absolute text-light profilebar_close" type="button" style={{top: 20, right: 20}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1" style={{fontSize: 30}}>
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <p className="position-absolute text_small text-white-50" style={{bottom: 10}}>Developed by <a href="https://twitter.com/codemonga" target="_blank" rel="noopener noreferrer">@codemonga</a></p>
        </aside>
        <section className="vh-100 w-100 position-relative"><img src="https://onesheetdesign.com/wp-content/uploads/movie_poster_design.jpg" width="100%" height="100%" style={{objectFit: 'cover'}} alt="authBackground_Image" />
            <div className="h-100 w-100 position-absolute auth-overlay d-flex justify-content-center align-items-center">
                <div id="auth_bar" className="py-3 px-3 w-100">
                    <nav className="navbar navbar-dark p-3">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-primary fw-bold brand_name" to="/">STREAMHEAVENS</Link>
                            <div className="d-flex">
                                <Link className="btn d-flex text-light px-0" role="button" to="login"><span className="d-none d-lg-block ms-1">login</span></Link>
                                <span className="d-none d-lg-block ms-1">|</span>
                                <Link className="btn d-flex text-white-50 px-0 me-2" role="button" to="register"><span className="d-none d-lg-block ms-1">register</span></Link>
                                <div className="dropstart pt-2 px-1 d-lg-none">
                                    <Link aria-expanded="false" data-bs-toggle="dropdown" className="auth-link" to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="auth-icon">
                                            <path d="M18 9V12M18 12V15M18 12H21M18 12H15M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21H3V20Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>&nbsp;
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-dark">
                                        <Link className="dropdown-item" to="login">login</Link>
                                        <Link className="dropdown-item" to="register">register</Link>
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
                <form className="auth-form">
                    <h4 className="mt-0 mb-4 auth-heading">RESET PASSWORD!</h4>
                    <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">New Password</label><button className="btn btn-sm text-light" type="button">show</button></div><input className="form-control" type="password" placeholder="xxxxxxxxxx" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">Confirm Password</label><button className="btn btn-sm text-light" type="button">show</button></div><input className="form-control" type="password" placeholder="xxxxxxxxxx" autoComplete="off" />
                    </div><button className="btn btn-primary btn-lg w-100 mb-4 border-0" type="button">submit</button>
                </form>
            </div>
        </section>
    </>
}

export default ResetPassword;