import React from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

const Popup = ({ status, handleHide, details, mediatype }) => {
    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={status} centered onHide={handleHide}>
            <Modal.Header className="border-0">
                <h4 className="modal-title mt-0 ms-3">Description</h4><CloseButton  variant="white" onClick={handleHide} />
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="w-100 h-100"><img className="modal_movie_img mb-3" src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="movie_image" width="100%" /></div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                            <div className="movie_details_container">
                            <div><span className="badge bg-primary me-2">{(details.media_type ? details.media_type : mediatype)}</span><span className="badge bg-primary">Rated {details.vote_average}</span></div>
                            <h4 className="my-3">{details.title || details.name}</h4>
                            <p>{details.overview}</p>
                            <div>
                                <p className="text_small mb-1 text-white-50">Released : {details.release_date || details.first_air_date}</p>
                                <p className="text_small mb-1 text-white-50">Language : {details.original_language}</p>
                                <p className="text_small mb-1 text-white-50">Popularity : {details.popularity}</p>
                                <p className="text_small mb-1 text-white-50">Vote : {details.vote_count}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Link className="btn btn-primary border-0" role="button" to="videoplayer.html">Watch now</Link><button className="btn btn-light border-0" type="button" onClick={handleHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default Popup