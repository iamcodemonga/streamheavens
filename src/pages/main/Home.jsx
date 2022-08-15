import React from 'react';
import LeftBar from '../../components/LeftBar';
import TopBar from '../../components/TopBar';
import HomeBanner from '../../components/banners/HomeBanner';
import NewReleases from '../../components/sliders/NewReleases';
import TrendingMovies from '../../components/sliders/TrendingMovies';
import PreBanner from '../../components/banners/PreBanner';
import TvShows from '../../components/gridcards/HomeTvShows';
import Footer from '../../components/Footer';
import Details from '../popups/MovieDetails'
import '../assets/css/home.css';

const Home = () => {

    return (
        <>
            <LeftBar />
            <main>
                <TopBar />
                <HomeBanner />
                <NewReleases />
                <TrendingMovies />
                <PreBanner />
                <TvShows />
                <Footer />
                <Details />
            </main>
        </>
        
    )
}

export default Home;