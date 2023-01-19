import { Link } from "react-dom";
import "../../assets/css/auth.css";

const Register = () => {
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
        <section className="vh-100 w-100 position-relative"><img src="https://onesheetdesign.com/wp-content/uploads/movie_poster_design.jpg" width="100%" height="100%" style={{objectFit: 'cover'}} alt="authBackground_image" />
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
                    <h4 className="mt-0 mb-4 auth-heading text-center">CREATE ACCOUNT</h4>
                    <div className="mb-3"><label className="form-label">Name</label><input className="form-control" type="text" placeholder="e.g john doe" /></div>
                    <div className="mb-3"><label className="form-label">Email</label><input className="form-control" type="email" placeholder="e.g johndoe@gmail.com" /></div>
                    <div className="mb-4">
                        <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">Password</label><button className="btn btn-sm text-light" type="button">show</button></div>
                        <input className="form-control" type="password" placeholder="xxxxxxxxxx" autoComplete="off" />
                    </div>
                    <button className="btn btn-primary btn-lg w-100 mb-4 border-0" type="button">submit</button>
                    <div>
                        <a className="btn btn-light w-100 mb-3 border-0" role="button" href="google.com" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-google me-3 mb-1">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>Signup with Google</a>
                        <a className="btn btn-light w-100 mb-3 border-0 btn-fb d-none" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook me-3 mb-1">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>Signup with Facebook</a><a className="btn btn-light w-100 mb-3 border-0 btn-twitter d-none" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter me-3 mb-1">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>Signup with Twitter</a></div>
                    <div className="row gx-3 gy-3 mb-3 d-none">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><a className="btn btn-light w-100 border-0" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-google me-3 mb-1">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>Google</a></div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><a className="btn btn-light w-100 border-0 btn-fb d-non" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook me-3 mb-1">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>Facebook</a><a className="btn btn-light w-100 border-0 btn-twitter d-none" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter me-3 mb-1">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>Twitter</a></div>
                    </div>
                    <div className="row gx-1 gy-2 mb-3 d-none">
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><a className="btn btn-light btn-sm w-100" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-google me-1 mb-1">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>google</a></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><a className="btn btn-sm btn-fb w-100" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook mb-1 me-1">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>facebook</a></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><a className="btn btn-sm btn-twitter w-100" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter me-1 mb-1">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>twitter</a></div>
                    </div><Link to="login" style={{fontSize: 14}}>Login instead!</Link>
                </form>
            </div>
        </section>
    </>
}

export default Register
