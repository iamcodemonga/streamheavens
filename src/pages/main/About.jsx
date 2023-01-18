import "../../assets/css/home.css"
import { NavLink, Link } from 'react-dom';

const About = () => {
    return <>
        <aside id="sidebar" className="d-flex justify-content-center align-items-center">
            <div className="overflow-hidden">
            <ul className="nav_list">
                <li style={{backdropFilter: 'opacity(1) blur(0px)', filter: 'blur(0px)'}}><a className="active" href="/">Home</a></li>
                <li><NavLink to="movies">Movies</NavLink></li>
                <li><NavLink to="tvshows">Tv shows</NavLink></li>
                <li><NavLink to="pricing">Pricing</NavLink></li>
                <li><a href="mailto:support@streamHeavens.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><NavLink to="about">About</NavLink></li>
            </ul>
            </div><button className="btn position-absolute text-light d-lg-none menubar_close" type="button" style={{top: 20, right: 20}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1" style={{fontSize: 30}}>
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg></button>
            <p className="position-absolute text_small text-white-50" style={{bottom: 10}}>Developed by <a href="https://twitter.com/codemonga" target="_blank" rel="noopener noreferrer">@codemonga</a></p>
        </aside>
        <main>
            <div id="topbar" className="py-3 px-3 w-100">
                <nav className="navbar navbar-dark p-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-primary fw-bold brand_name" href="/">STREAMHEAVENS</Link>
                        <div className="d-flex">
                            <Link className="btn d-flex text-light px-0 me-2" role="button" href="register">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: 23}}>
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="d-none d-lg-block ms-1">register</span>
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
            <header className="w-100 banner position-relative" style={{backgroundImage: 'url(https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className="h-100 w-100 banner-overlay d-flex">
                    <div className="hero-banner-content p-4">
                    <h1 className="mb-1">ABOUT US</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/"><span>Home</span></a></li>
                        <li className="breadcrumb-item active"><span>About</span></li>
                    </ol>
                    </div>
                </div>
            </header>
            <section>
                <div className="container-fluid pt-1 px-md-4">
                    <h3>The Company</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                </div>
                <div className="container-fluid pb-5 px-md-4">
                    <h3>Meet the team</h3>
                    <div className="row gy-4 mb-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                        <div className="card movie-card-grid"><a href="https://codemonga.bss.design" rel="noopener noreferrer"><img src="https://images.pexels.com/photos/6626403/pexels-photo-6626403.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="team_mate" /></a>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">John grey</a></h6>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                        <div className="card movie-card-grid"><a href="https://codemonga.bss.design" rel="noopener noreferrer"><img src="https://images.pexels.com/photos/6256142/pexels-photo-6256142.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="team_mate" /></a>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">Rebecca stones</a></h6>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                        <div className="card movie-card-grid"><a href="https://codemonga.bss.design" rel="noopener noreferrer"><img src="https://images.pexels.com/photos/12814838/pexels-photo-12814838.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="team_mate" /></a>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">David arthur</a></h6>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                        <div className="card movie-card-grid"><a href="https://codemonga.bss.design" rel="noopener noreferrer"><img src="https://images.pexels.com/photos/8720590/pexels-photo-8720590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="team_mate" /></a>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">Hailey austin</a></h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <footer className="position-relative" style={{backgroundImage: 'url(https://html.nkdev.info/fliqs/assets/images/movies/movie-1-1290x1290.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="h-100 w-100 position-absolute d-flex align-items-center" style={{top: 0, left: 0, backgroundColor: 'rgba(9,10,12,0.8)'}}>
                <div className="container">
                <div className="row gy-4">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div>
                        <h5 className="text-center">StreamHeavens</h5>
                        <p className="text-white-50 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 align-self-end mx-auto">
                    <div>
                        <p className="text-center text_small"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">Twitter</a></p>
                        <p className="text-center text_small"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">Instagram</a></p>
                        <p className="text-center text_small"><a className="text-light" href="https://codemonga.bss.design" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 align-self-end mx-auto">
                    <div>
                        <p className="text-center text_small"><Link className="text-light" to="about">Developer</Link></p>
                        <p className="text-center text_small"><Link className="text-light" to="about">About</Link></p>
                        <p className="text-center text_small"><Link className="text-light" to="about">API</Link></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </main>
    </>
}


export default About;