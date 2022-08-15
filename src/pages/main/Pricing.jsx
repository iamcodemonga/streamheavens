import React from 'react';
import LeftBar from '../../components/LeftBar';
import TopBar from '../../components/TopBar';
import Banner from '../../components/banners/PriceBanner';
import PriceGrid from '../../components/gridcards/PriceCards';
import Footer from '../../components/Footer';
import '../assets/css/home.css';

const Pricing = () => {
    return (
        <>
            <LeftBar />
            <main>
                <TopBar />
                <Banner />
                <PriceGrid />
                <Footer />
            </main>
        </>
    )
}

export default Pricing;