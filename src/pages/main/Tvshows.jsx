import React from 'react';
import TopBar from '../../components/TopBar';
import LeftBar from '../../components/LeftBar';
import Banner from '../../components/banners/ShowsBanner';
import ShowGrid from '../../components/gridcards/TvShows';
import Footer from '../../components/Footer';
import '../assets/css/home.css';

const Tvshows = () => {
    return (
        <>
            <LeftBar />
            <main>
                <TopBar />
                <Banner />
                <ShowGrid />
                <Footer />
            </main>
        </>
        
    )
}

export default Tvshows;