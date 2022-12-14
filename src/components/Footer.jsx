import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer data-bss-parallax-bg="true" className="position-relative" style={{backgroundImage: 'url(https://html.nkdev.info/fliqs/assets/images/movies/movie-1-1290x1290.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
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
                    <p className="text-center text_small"><Link className="text-light" to="/">Twitter</Link></p>
                    <p className="text-center text_small"><Link className="text-light" to="/">Instagram</Link></p>
                    <p className="text-center text_small"><Link className="text-light" to="/">LinkedIn</Link></p>
                </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 align-self-end mx-auto">
                <div>
                    <p className="text-center text_small"><Link className="text-light" to="/">Developer</Link></p>
                    <p className="text-center text_small"><Link className="text-light" to="/">About</Link></p>
                    <p className="text-center text_small"><Link className="text-light" to="/">API</Link></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
)
}

export default Footer;