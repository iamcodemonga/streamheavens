import React from 'react';
import { Link } from 'react-router-dom';

const HomeShowList = () => {
  return (
    <div className="container-fluid px-md-4 pb-5">
        <h4 className="mb-5">Tv Shows</h4>
        <div className="row gy-4 mb-4">
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
        {/* <p className="text-center my-4"><button className="btn btn-primary border-0 bg-primary" type="button">More Movies</button></p> */}
    </div>
  )
}

export default HomeShowList