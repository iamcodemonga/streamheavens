import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {  fetchMovies } from '../../features/contentSlice';
import { Link } from "react-router-dom";
import Loader from '../Loaders/GridLoader';
import Popup from '../Popup';

const MovieList = () => {

    const { movies, moviesLoading, moviesError, moviesSuccess } = useSelector((state) => state.content);
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState([]);
    const [limit, setLimit] = useState(8)
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleShow = () => setShowModal(true);

    const handleHide = () => setShowModal(false);

    const handleTap = (e, options) => {
        e.preventDefault();
        setDetails(options);
        handleShow();
    }

    const handleSearch = async() => {
        setLimit(8)
        setTimeout(() => {
            dispatch(fetchMovies(query))
        }, 1500);
    }

    const handleMore = () => setLimit((prev) => prev+4);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <>
            <div className="container-fluid pb-5 px-md-4">
                <div className="py-5"><input type="text" className="form-control search_input" placeholder="search movies" value={query} onChange={(e) => setQuery(e.target.value)} onKeyUp={handleSearch} /></div>
                    <div className="row gy-4">
                        {moviesError && <Loader />}
                        {moviesLoading && <Loader />}
                        {moviesSuccess && movies.slice(0, limit).map((movie, index) =>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={index}>
                                <div className="card movie-card-grid"><Link to="movie" onClick={(e) => handleTap(e, movie)}><img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://sushihousemenu.com/Media/Default/Menu%20Items/placeholder.png`} className="h-100 w-100" alt="movie_image" /></Link>
                                <div className="card-body px-0">
                                    <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="movie" onClick={(e) => handleTap(e, movie)}>{movie.title}</Link></h6>
                                    <div>
                                    <p className="text_small mb-0 text-white-50">{movie.release_date}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                                        <circle cx={8} cy={8} r={8} />
                                        </svg>movie</p>
                                    </div>
                                </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>{movie.vote_average}</span>
                                <button className="btn text-light position-absolute" type="button" style={{right: 10}} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: '25px'}}>
                                        <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                </div>
                            </div>
                        )}
                    </div>
                <p className="text-center my-4"><button className="btn btn-primary border-0 bg-primary px-4" type="button" onClick={handleMore}>Load more</button></p>
            </div>
            <Popup status={showModal} handleHide={handleHide} details={details} mediatype="movie" />
        </>
    )
}

export default MovieList;