import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromListed } from '../../features/authSlice';
import axios from 'axios';
import {  fetchTvSeries } from '../../features/contentSlice';
import { Link, useNavigate } from "react-router-dom";
import Loader from '../Loaders/GridLoader';
import Popup from '../Popup';

const ShowList = () => {

    const  user = useSelector((state) => state.auth.user);
    const { tvSeries, tvSeriesLoading, tvSeriesError, tvSeriesSuccess } = useSelector((state) => state.content);
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState([]);
    const [limit, setLimit] = useState(8);
    const [query, setQuery] = useState('');
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

    const handleLike = ({ poster, title, released, series }) => {

        if(!user) {
            navigate('/register'); 
            return;
        }

        if (user.favourites.includes(poster)) {
            dispatch(removeFromListed(poster))
            try {
                const { data } = axios.put(`${AppRoot}/favourites/like/${user._id}`, { poster, title, released, series })
                return data;
            } catch (error) {
                console.log(error.message)
            }
            return;
        }
        dispatch(addToList(poster))
        try {
            const { data } = axios.put(`${AppRoot}/favourites/like/${user._id}`, { poster, title, released, series })
            return data;
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleSearch = async() => {
        setLimit(8);
        setTimeout(() => {
            dispatch(fetchTvSeries(query));
        }, 1500);
    }

    const handleMore = () => setLimit((prev) => prev+4);

    useEffect(() => {
        dispatch(fetchTvSeries())
    }, [dispatch])
    return (
        <>
            <div className="container-fluid pb-5 px-md-4">
                <div className="py-5"><input type="text" className="form-control search_input" placeholder="search TV shows" value={query} onChange={(e) => setQuery(e.target.value)} onKeyUp={handleSearch} /></div>
                <div className="row gy-4">
                    {tvSeriesError && <Loader />}
                    {tvSeriesLoading && <Loader />}
                    {tvSeriesSuccess && tvSeries.slice(0, limit).map((show, index) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={index}>
                        <div className="card movie-card-grid"><Link to="show" onClick={(e) => handleTap(e, show)}><img src={show.poster_path ? `https://image.tmdb.org/t/p/w500/${show.poster_path}` : `https://sushihousemenu.com/Media/Default/Menu%20Items/placeholder.png`} alt="show_image" /></Link>
                        <div className="card-body px-0">
                            <h6 className="card-title mt-0 mb-1"><Link className="text-light" to="show" onClick={(e) => handleTap(e, show)}>{show.name}</Link></h6>
                            <div>
                            <p className="text_small mb-0 text-white-50">{show.first_air_date}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-fill mx-2" style={{fontSize: 5}}>
                                <circle cx={8} cy={8} r={8} />
                                </svg>series</p>
                            </div>
                        </div><span className="badge bg-primary position-absolute" style={{top: 10, left: 10}}>{show.vote_average}</span>
                            <button className="btn text-light position-absolute" type="button" style={{right: 10}} onClick={() => handleLike({ poster: show.poster_path, title: show.name, released: show.first_air_date, series: true })}>
                            {user ? user.favourites.includes(show.poster_path) ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{color: '#ff006e', fontSize: '25px'}}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z" fill="currentColor" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: '25px'}}>
                                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{fontSize: '25px'}}>
                                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                            </button>
                        </div>
                    </div>)}
                </div>
                <p className="text-center my-4"><button className="btn btn-primary border-0 bg-primary px-4" type="button" onClick={handleMore}>Load more</button></p>
            </div>
            <Popup status={showModal} handleHide={handleHide} details={details} mediatype="movie" />
        </>
    )
}

export default ShowList;