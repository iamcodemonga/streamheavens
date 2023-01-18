import "../../assets/css/home.css";
import { NavLink, Link } from 'react-dom';

const Home = () => {
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
            <header className="w-100 hero-banner position-relative" style={{backgroundImage: 'url(https://image.shutterstock.com/image-photo/bangkok-thailand-july-12019-setting-600w-1439644991.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <img className="w-100 h-100 d-none" src="https://image.shutterstock.com/image-photo/bangkok-thailand-july-12019-setting-600w-1439644991.jpg" alt="homebanner_image" />
                <div className="h-100 w-100 banner-overlay d-flex">
                    <div className="hero-banner-content p-4">
                        <span className="badge bg-primary me-2">action</span><span className="badge bg-primary me-2">18+</span>
                        <h1 className="mb-1">Batman: The brave and the bold</h1>
                        <p className="text_small text-white-50">year: 2018</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <a className="btn btn-primary bg-primary border-0 mt-2 px-4" role="button" href="movie.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>Watch now
                        </a>
                    </div>
                </div>
            </header>
            <section>
                <div className="container-fluid px-md-4">
                    <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                        <h5 className="my-0">New Releases</h5>
                        <div>
                            <button className="btn text-light me-1 prevbtn" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{marginBottom: 8, fontSize: 20}}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" fill="currentColor" />
                                 </svg>
                            </button>
                            <button className="btn text-light nextbtn" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{marginBottom: 8, fontSize: 20}}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <a className="btn btn-primary btn-sm border-0 bg-primary d-none" role="button" href="movies.html">view more
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="ms-1">
                                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="movie-container d-flex">
                        <div className="card movie-card"><Link to="movie" data-bs-target="#modal-1" data-bs-toggle="modal" rel="noopener noreferrer"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-6.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-5.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-7.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-8.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-9.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-8.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-11.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-12.jpeg" alt="moviecard_image" /></Link>
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
                        <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-13.jpeg" alt="moviecard_image" /></Link>
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
                <div className="container-fluid px-md-4">
                    <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                    <h5 className="my-0">Trending movies</h5>
                    <div><button className="btn text-light me-1 prevbtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{marginBottom: 8, fontSize: 20}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" fill="currentColor" />
                        </svg></button><button className="btn text-light nextbtn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{marginBottom: 8, fontSize: 20}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z" fill="currentColor" />
                        </svg></button></div><a className="btn btn-primary btn-sm border-0 bg-primary d-none" role="button" href="movies.html">view more<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="ms-1">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg></a>
                    </div>
                    <div className="movie-container d-flex">
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-14.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-15.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-16.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-17.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-18.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-19.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-20.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-21.jpeg" alt="moviecard_image" /></Link>
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
                    <div className="card movie-card"><Link to="movie"><img src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-22.jpeg" alt="moviecard_image" /></Link>
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
                <div className="container-fluid my-5 py-4 px-md-4">
                    <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="slide-container position-relative"><img className="w-100 h-100" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-4.jpeg" alt="Slide_Image" style={{objectFit: 'cover', backgroundColor: '#121317'}} />
                            <div className="carousel-overlay w-100 h-100 position-absolute d-flex align-items-center">
                            <div className="carousel-content p-4">
                                <h1>Money Heist</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p><button className="btn btn-primary px-4 border-0 bg-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>PLAY NOW</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className="slide-container position-relative"><img className="w-100 h-100" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-25.jpeg" alt="Slide_Image" style={{objectFit: 'cover'}} />
                            <div className="carousel-overlay w-100 h-100 position-absolute d-flex align-items-center">
                            <div className="carousel-content p-4">
                                <h1>CREED II</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p><button className="btn btn-primary px-4 border-0 bg-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>PLAY NOW</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className="slide-container position-relative"><img className="w-100 h-100" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-24.jpeg" alt="Slide_Image" style={{objectFit: 'cover'}} />
                            <div className="carousel-overlay w-100 h-100 position-absolute d-flex align-items-center">
                            <div className="carousel-content p-4">
                                <h1>SAN ANDREAS</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p><button className="btn btn-primary px-4 border-0 bg-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="mb-1 me-1" style={{fontSize: 30}}>
                                    <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>PLAY NOW</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid px-md-4 pb-5">
                    <h4 className="mb-5">Tv Shows</h4>
                    <div className="row gy-4">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-1-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-2-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-3-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-4-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-5-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-6-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-8-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                        <div className="card movie-card-grid"><Link to="show"><img src="https://html.nkdev.info/fliqs/assets/images/tv-shows/show-12-390x440.jpg" alt="moviecard_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show">This is the title of the movie stupid</Link></h6>
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
                    <p className="text-center my-4"><button className="btn btn-primary border-0 bg-primary" type="button">More Movies</button></p>
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
        <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                    <h4 className="modal-title mt-0 ms-3">Movie</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="w-100 h-100"><img className="modal_movie_img mb-3" src="http://template.gentechtreedesign.com/html/streamlab/html/images/background/asset-6.jpeg" alt="movie_image" width="100%" /></div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                            <div className="movie_details_container">
                            <div><span className="badge bg-primary me-2">Thriller</span><span className="badge bg-primary">18+</span></div>
                            <h4 className="mt-0">War zone :&nbsp; Battle of the warlocks</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                            <div>
                                <p className="text_small mt-4 mb-1 text-white-50">Language : English</p>
                                <p className="text_small mb-1 text-white-50">Subtitle : English</p>
                                <p className="text_small mb-1 text-white-50">Run time : 1hr 25mins</p>
                                <p className="text_small mb-1 text-white-50">Released : 20 Aug, 2020</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer border-0"><a className="btn btn-primary" role="button" href="videoplayer.html">Watch now</a><button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button></div>
                </div>
            </div>
        </div>
    </>
}

export default Home;