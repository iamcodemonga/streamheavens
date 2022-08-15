import React from 'react';
import LeftBar from '../../components/LeftBar';
import TopBar from '../../components/TopBar';
import AboutBanner from '../../components/banners/AboutBanner';
import CompanyBio from '../../components/CompanyBio';
import Team from '../../components/Team';
import Footer from '../../components/Footer';
import '../assets/css/home.css';

const About = () => {
    return (
        <>
            <LeftBar />
            <main>
                <TopBar />
                <AboutBanner />
                <section>
                    <CompanyBio />
                    <Team />
                </section>
                <Footer />
            </main>
        </>
    )
}

export default About;