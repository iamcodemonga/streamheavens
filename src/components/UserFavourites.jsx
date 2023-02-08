import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavourites, removeFavourites } from '../features/contentSlice';
import { removeFromListed } from '../features/authSlice';
import Loader from './Loaders/favouritesLoader';

const UserFavourites = () => {

    const user = useSelector((state) => state.auth.user);
    let  { favourites, favouritesLoading, favouritesError, favouritesSuccess } = useSelector((state) => state.content)
    const dispatch = useDispatch();

    const handleDrop = async(info) => {
        dispatch(removeFavourites(info.poster))
        dispatch(removeFromListed(info.poster))
        try {
            const { data } = axios.put(`http://localhost:5005/favourites/like/${user._id}`, { title: info.title, poster: info.poster, released: info.released, series: info.series });
            console.log(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        dispatch(fetchFavourites())
    },[dispatch])

  return (
        <div className="w-100 h-100 py-5 px-4 bg-dark" style={{borderRadius: 20}}>
            <div className="row">
                {favouritesLoading && <Loader />}
                {favouritesError && <Loader />}
                {favouritesSuccess  && favourites.map((favourite, index) => 
                    <div className="col-12 mb-4" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <img className="profile_dp" src={favourite.poster ? `https://image.tmdb.org/t/p/w500${favourite.poster}` : `https://sushihousemenu.com/Media/Default/Menu%20Items/placeholder.png`} alt='movie_image' />
                                </div>
                                <div>
                                    <h6 className="mt-0 mb-1">{favourite.title}</h6>
                                    <p className="text_small text-white-50 mb-0">{favourite.released} | { favourite.series ? 'series' : 'movie'}</p>
                                </div>
                            </div>
                            <div>
                                <button className="btn text-light" type="button" onClick={() => {handleDrop({title: favourite.title, poster: favourite.poster, released: favourite.released, series: favourite.series})}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart-fill">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <hr />
                    </div>) }
                {favouritesSuccess && favourites.length === 0 && <div className='d-flex justify-content-center align-items-center w-100' style={{height: '30vh'}}><div>
                        <h6>You have not added any favourites yet</h6>
                        <p className='text-center'><Link className="btn btn-primary bg-primary border-0 mt-2" role="button" to="/">start streaming</Link></p>
                        </div>
                    </div> }
            </div>
        </div>
  )
}

export default UserFavourites