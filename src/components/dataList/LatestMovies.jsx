import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLatestMovies } from '../../features/contentSlice';
import { addToList, removeFromListed } from '../../features/authSlice';
import axios from 'axios';
import Loader from '../Loaders/SliderLoader'
import Popup from '../Popup';

const LatestMovies = () => {
    const  user = useSelector((state) => state.auth.user);
    const { latestMovies, latestMoviesLoading, latestMoviesError, latestMoviesSuccess } = useSelector((state) => state.content)
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AppRoot = process.env.REACT_APP_API_ROOT;

    const handleShow = () => setShowModal(true);

    const handleHide = () => setShowModal(false);

    const handleTap = (e, options) => {
        e.preventDefault();
        setDetails(options);
        handleShow();
    }

    const handleLike = async({ poster, title, released, series }) => {

        if(!user) {
            navigate('/register'); 
            return;
        }

        if (user.favourites.includes(poster)) {
            dispatch(removeFromListed(poster))
            try {
                const { data } = await axios.put(`${AppRoot}/favourites/like/${user._id}`, { poster, title, released, series });
                return data;
            } catch (error) {
                console.log(error.message)
            }
            return;
        }
        dispatch(addToList(poster))
        try {
            const { data } = await axios.put(`${AppRoot}/favourites/like/${user._id}`, { poster, title, released, series })
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        dispatch(fetchLatestMovies())
    }, [dispatch])
    

    return (
        <>
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
                    {latestMoviesLoading && <Loader />}
                    {latestMoviesError && <Loader />}
                    {latestMoviesSuccess && latestMovies.slice(0, 16).map((movie, index) => 
                    <div className="card movie-card" key={index}>
                        <Link to="movie" onClick={(e) => handleTap(e, movie)}>
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://sushihousemenu.com/Media/Default/Menu%20Items/placeholder.png`} alt="moviecard_image" />
                        </Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1">
                                <Link className="text-light" to="movie" onClick={(e) => handleTap(e, movie)}>{movie.title}</Link>
                            </h6>
                            <div>
                                <p className="text_small mb-0 text-white-50">{movie.release_date}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                                    <circle cx={8} cy={8} r={8} />
                                </svg>movie</p>
                            </div>
                        </div>
                        <span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>{movie.vote_average}</span>
                        <button className="btn text-light position-absolute" type="button" style={{right: 10}} onClick={() => handleLike({ poster: movie.poster_path, title: movie.title, released: movie.release_date, series: false })}>
                            {user ? user.favourites.includes(movie.poster_path) ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{color: '#ff006e', fontSize: '25px'}}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z" fill="currentColor" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: '25px'}}>
                                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: '25px'}}>
                                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                        </button>
                    </div>)}
                </div>
            </div>
            <Popup status={showModal} handleHide={handleHide} details={details} mediatype="movie" />
        </>
    )
}

export default LatestMovies