import "../../assets/css/home.css";
import { NavLink, Link } from 'react-router-dom';

const Movies = () => {
    return <>
        <aside id="sidebar" className="d-flex justify-content-center align-items-center">
            <div className="overflow-hidden">
            <ul className="nav_list">
                <li style={{backdropFilter: 'opacity(1) blur(0px)', filter: 'blur(0px)'}}><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movies" className="active">Movies</NavLink></li>
                <li><NavLink to="/tvshows">Tv shows</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><a href="mailto:support@streamHeavens.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><NavLink to="/about">About</NavLink></li>
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
                        <Link className="navbar-brand text-primary fw-bold brand_name" to="/">STREAMHEAVENS</Link>
                        <div className="d-flex">
                            {/* <Link className="btn d-flex text-light px-0 me-2" role="button" to="/register">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: 23}}>
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="d-none d-lg-block ms-1">register</span>
                            </Link> */}
                            <Link className="btn d-flex align-items-center me-1 text-light px-0 me-2" to={"/"}>
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
            <header className="w-100 banner position-relative" style={{backgroundImage: 'url(http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-30.jpeg)', backgroundPosition: 'center', backgroundSize: 'cover'}}><img className="w-100 h-100 d-none" src="https://image.shutterstock.com/image-photo/bangkok-thailand-july-12019-setting-600w-1439644991.jpg" alt="movie_banner_image" />
            <div className="h-100 w-100 banner-overlay d-flex">
                <div className="hero-banner-content p-4">
                <h1 className="mb-1">ALL MOVIES</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/"><span>Home</span></a></li>
                    <li className="breadcrumb-item active"><span>Movies</span></li>
                </ol>
                </div>
            </div>
            </header>
            <section>
            <div className="container-fluid pb-5 px-md-4">
                <div className="py-5"><input type="text" className="form-control search_input" placeholder="search movies" /></div>
                <div className="row gy-4">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-1-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-2-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-3-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-4-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-5-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-6-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-8-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                    <div className="card movie-card-grid"><Link to="movie"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-12-390x440.jpg" alt="movie_image" /></Link>
                    <div className="card-body px-0">
                        <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie">This is the title of the movie stupid</Link></h6>
                        <div>
                        <p className="text_small mb-0 text-white-50">1hr 35mins<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                            <circle cx={8} cy={8} r={8} />
                            </svg>action</p>
                        </div>
                    </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>18+</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </div>
                </div>
                </div>
                <p className="text-center my-4"><button className="btn btn-primary border-0 bg-primary px-4" type="button">Load more</button></p>
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

export default Movies;