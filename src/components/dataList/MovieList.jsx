import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Popup from '../Popup';

const MovieList = () => {

    const [ movies, setMovies ] = useState([]);
    const key = process.env.REACT_APP_MOVIE_API;
    const baseURL = process.env.REACT_APP_MOVIE_BASEURL;
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState([])

    const handleShow = () => setShowModal(true);

    const handleHide = () => setShowModal(false);

    const handleTap = (e, options) => {
        e.preventDefault();
        setDetails(options);
        handleShow();
    }

    useEffect(() => {
        const FetchMovies = async () => {
            const { data } = await axios.get(`${baseURL}/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            setMovies(data.results)
        }
        FetchMovies()
    }, [baseURL, key])

    return (
        <>
            <div className="container-fluid pb-5 px-md-4">
                <div className="py-5"><input type="text" className="form-control search_input" placeholder="search movies" /></div>
                    <div className="row gy-4">
                        {movies && movies.map((movie) =>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="card movie-card-grid"><Link to="movie" onClick={(e) => handleTap(e, movie)}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie_image" /></Link>
                                <div className="card-body px-0">
                                    <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie" onClick={(e) => handleTap(e, movie)}>{movie.title}</Link></h6>
                                    <div>
                                    <p className="text_small mb-0 text-white-50">{movie.release_date}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                                        <circle cx={8} cy={8} r={8} />
                                        </svg>movie</p>
                                    </div>
                                </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>{movie.vote_average}</span><button className="btn text-light position-absolute" type="button" style={{right: 10}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{marginBottom: 8}}>
                                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg></button>
                                </div>
                            </div>
                        )}
                    </div>
                <p className="text-center my-4"><button className="btn btn-primary border-0 bg-primary px-4" type="button">Load more</button></p>
            </div>
            <Popup status={showModal} handleHide={handleHide} details={details} mediatype="movie" />
        </>
    )
}

export default MovieList;