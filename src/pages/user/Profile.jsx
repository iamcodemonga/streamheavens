import { NavLink, Link } from 'react-dom';

const Profile = () => {
  return <>
    <aside id="leftbar" className="d-flex justify-content-center align-items-center leftbar">
        <div className="overflow-hidden">
        <ul className="profile_navlist">
            <li style={{backdropFilter: 'opacity(1) blur(0px)', filter: 'blur(0px)'}}><Link to="/">Home</Link></li>
            <li><Link to="movies">Movies</Link></li>
            <li><Link to="tvshows">Tv shows</Link></li>
            <li><Link to="pricing">Pricing</Link></li>
            <li><a href="mailto:support@streamHeavens.com" target="_blank" rel='noopener noreferrer'>Contact</a></li>
            <li><Link to="about">About</Link></li>
        </ul>
        </div><button className="btn position-absolute text-light profilebar_close" type="button" style={{top: 20, right: 20}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="me-1 mb-1" style={{fontSize: 30}}>
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg></button>
        <p className="position-absolute text_small text-white-50" style={{bottom: 10}}>Developed by <a href="https://twitter.com/codemonga" target="_blank" rel='noopener noreferrer'>@codemonga</a></p>
    </aside>
    <main id="profile_main">
        <div id="profilebar" className="py-3 px-3 w-100">
            <nav className="navbar navbar-dark p-3">
                <div className="container-fluid"><Link className="navbar-brand text-primary fw-bold brand_name" to="/">STREAMHEAVENS</Link>
                <div className="d-flex"><Link className="btn d-flex align-items-center me-1 text-light px-0 me-2" to="#">
                    <div className="d-flex justify-content-center align-items-center" style={{width: 25, height: 25, clipPath: 'circle()', backgroundColor: 'white'}}><img width="21px" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="21px" style={{objectFit: 'cover', clipPath: 'circle()'}} alt="Profile_picture" /></div><span className="d-none d-lg-block ms-2">account</span>
                    </Link><button className="btn p-0 profile_menubar" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="text-light" style={{fontSize: 35}}>
                        <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button></div>
                </div>
            </nav>
        </div>
        <section className="profile_section">
            <div className="container pt-1 px-md-4">
                <div className="row gy-4 mb-5 mt-4">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <ul className="nav flex-column py-4 bg-dark px-3" id="profileNav">
                        <li className="nav-item"><NavLink className="nav-link active" to="Profile">About me</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="Profile/favourites">Favourites</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="Profile/edit">Edit account</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="Profile/password">Change Password</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="Profile/logout">Logout</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                        <div className="w-100 h-100 py-5 px-4 bg-dark d-non" style={{borderRadius: 20}}>
                            <div className="row">
                                <div className="col-12"><img className="profile_dp" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile_picture' /></div>
                                <div className="col-12">
                                <div className="row g-0 mt-4">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Name</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0">&nbsp;codemonga</p>
                                    </div>
                                </div>
                                <hr />
                                </div>
                                <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Email</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0">codemonga@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                </div>
                                <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Gender</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0">&nbsp;male</p>
                                    </div>
                                </div>
                                <hr />
                                </div>
                                <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Date Of Birth</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0">20-10-2022</p>
                                    </div>
                                </div>
                                <hr />
                                </div>
                                <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Country</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0">&nbsp;nigeria</p>
                                    </div>
                                </div>
                                <hr />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 h-100 py-5 px-4 bg-dark d-none" style={{borderRadius: 20}}>
                        <div className="row">
                            <div className="col-12 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                <div className="me-2"><img className="profile_dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ4Ck_JyIouVnUM5MKMOKQG3J0uOH6-wLoA&usqp=CAU" alt='movie_image' /></div>
                                <div>
                                    <h6 className="mt-0 mb-1">Title of the movie</h6>
                                    <p className="text_small text-white-50 mb-0">2hrs 30mins | season 1</p>
                                </div>
                                </div>
                                <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button></div>
                            </div>
                            <hr />
                            </div>
                            <div className="col-12 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                <div className="me-2"><img className="profile_dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ4Ck_JyIouVnUM5MKMOKQG3J0uOH6-wLoA&usqp=CAU" alt='movie_image' /></div>
                                <div>
                                    <h6 className="mt-0 mb-1">Title of the movie</h6>
                                    <p className="text_small text-white-50 mb-0">2hrs 30mins | season 1</p>
                                </div>
                                </div>
                                <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button></div>
                            </div>
                            <hr />
                            </div>
                            <div className="col-12 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                <div className="me-2"><img className="profile_dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ4Ck_JyIouVnUM5MKMOKQG3J0uOH6-wLoA&usqp=CAU" alt='movie_image' /></div>
                                <div>
                                    <h6 className="mt-0 mb-1">Title of the movie</h6>
                                    <p className="text_small text-white-50 mb-0">2hrs 30mins | season 1</p>
                                </div>
                                </div>
                                <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button></div>
                            </div>
                            <hr />
                            </div>
                            <div className="col-12 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                <div className="me-2"><img className="profile_dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ4Ck_JyIouVnUM5MKMOKQG3J0uOH6-wLoA&usqp=CAU" alt='movie_image' /></div>
                                <div>
                                    <h6 className="mt-0 mb-1">Title of the movie</h6>
                                    <p className="text_small text-white-50 mb-0">2hrs 30mins | season 1</p>
                                </div>
                                </div>
                                <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button></div>
                            </div>
                            <hr />
                            </div>
                            <div className="col-12 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                <div className="me-2"><img className="profile_dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ4Ck_JyIouVnUM5MKMOKQG3J0uOH6-wLoA&usqp=CAU" alt='movie_image' /></div>
                                <div>
                                    <h6 className="mt-0 mb-1">Title of the movie</h6>
                                    <p className="text_small text-white-50 mb-0">2hrs 30mins | season 1</p>
                                </div>
                                </div>
                                <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button></div>
                            </div>
                            <hr />
                            </div>
                            <div className="col-12 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                <div className="me-2"><img className="profile_dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ4Ck_JyIouVnUM5MKMOKQG3J0uOH6-wLoA&usqp=CAU" alt='movie_image' /></div>
                                <div>
                                    <h6 className="mt-0 mb-1">Title of the movie</h6>
                                    <p className="text_small text-white-50 mb-0">2hrs 30mins | season 1</p>
                                </div>
                                </div>
                                <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button></div>
                            </div>
                            <hr />
                            </div>
                        </div>
                        </div>
                        <div className="w-100 h-100 py-5 px-4 bg-dark d-none" style={{borderRadius: 20}}>
                            <div className="row">
                                <div className="col">
                                <form>
                                    <div className="col-12"><img className="profile_dp" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile_image' /></div>
                                    <div className="col-12">
                                    <div className="row g-0 mt-4">
                                        <div className="col-sm-12 col-md-6">
                                        <p className="mb-0 text-white-50">Profile picture</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6"><input className="form-control" type="file" /></div>
                                    </div>
                                    <hr />
                                    </div>
                                    <div className="col-12">
                                    <div className="row g-0">
                                        <div className="col-sm-12 col-md-6">
                                        <p className="mb-0 text-white-50">Name</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="text" style={{border: '1px solid white'}} placeholder="e.g john doe" defaultValue="codemonga" /></div>
                                    </div>
                                    <hr />
                                    </div>
                                    <div className="col-12">
                                    <div className="row g-0">
                                        <div className="col-sm-12 col-md-6">
                                        <p className="mb-0 text-white-50">Email</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="email" style={{border: '1px solid white'}} placeholder="e.g johndoe@gmail.com" defaultValue="codemonga@gmail.com" /></div>
                                    </div>
                                    <hr />
                                    </div>
                                    <div className="col-12">
                                    <div className="row g-0">
                                        <div className="col-sm-12 col-md-6">
                                        <p className="mb-0 text-white-50">Gender</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6"><select className="form-select form-control py-2" style={{border: '1px solid white'}}>
                                            <optgroup label="What's your gender">
                                            <option value="male" selected>Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                            </optgroup>
                                        </select></div>
                                    </div>
                                    <hr />
                                    </div>
                                    <div className="col-12">
                                    <div className="row g-0">
                                        <div className="col-sm-12 col-md-6">
                                        <p className="mb-0 text-white-50">Date Of Birth</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" style={{border: '1px solid white'}} type="date" /></div>
                                    </div>
                                    <hr />
                                    </div>
                                    <div className="col-12">
                                    <div className="row g-0">
                                        <div className="col-sm-12 col-md-6">
                                        <p className="mb-0 text-white-50">Country</p>
                                        </div>
                                        <div className="col-sm-12 col-md-6"><select className="form-select form-control py-2" style={{border: '1px solid white'}}>
                                            <optgroup label="Select your country">
                                            <option value="nigeria" selected>Nigeria</option>
                                            <option value="USA">United States Of America</option>
                                            <option value="canada">Canada</option>
                                            </optgroup>
                                        </select></div>
                                    </div>
                                    <hr />
                                    </div><button className="btn btn-primary" type="button">submit</button>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 h-100 py-5 px-4 bg-dark d-none" style={{borderRadius: 20}}>
                        <div className="row">
                            <div className="col">
                            <form>
                                <div className="col-12"><img className="profile_dp" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='profile_image' /></div>
                                <div className="col-12">
                                <div className="row g-0 mt-4">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Current Password</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" /></div>
                                </div>
                                <hr />
                                </div>
                                <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">New Password</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" /></div>
                                </div>
                                <hr />
                                </div>
                                <div className="col-12">
                                <div className="row g-0">
                                    <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Confirm Password</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" /></div>
                                </div>
                                <hr />
                                </div><button className="btn btn-primary border-0" type="button">submit</button>
                            </form>
                            </div>
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

export default Profile