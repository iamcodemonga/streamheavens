import React from 'react';
import LeftBar from '../../components/LeftBar';
import TopBar from '../../components/TopBar';
import Banner from '../../components/banners/MovieBanner';
import MovieGrid from '../../components/gridcards/Movies';
import Footer from '../../components/Footer';
import '../assets/css/home.css';

const Movies = () => {
    return (
        <>
            <LeftBar />
            <main>
                <TopBar />
                <Banner />
                <MovieGrid />
                <Footer />
            </main>
        </>
    )
}

export default Movies