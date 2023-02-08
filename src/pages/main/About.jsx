import "../../assets/css/home.css";
import { useEffect } from "react";
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/AboutBanner';
import Team from '../../components/dataList/Team';
import Footer from '../../components/Footer'

const About = () => {

    const handleSideBar = () => {
        const menubar = document.querySelector('.menubar');
        const menubar_close = document.querySelector('.menubar_close');
        const sideBar = document.querySelector('#sidebar');
        const navlist = document.querySelector('.nav_list');

        menubar.addEventListener('click', () => {
            sideBar.style.width = '100%';
            navlist.style.opacity = '1';
        });

        menubar_close.addEventListener('click', () => {
            navlist.style.opacity = '0';
            sideBar.style.width = '0';
        });
    }

    useEffect(() => {
        handleSideBar();
    }, [])

    return <>
        <LeftBar />
        <main>
            <NavBar />
            <Banner />
            <section>
                <div className="container-fluid pt-1 px-md-4">
                    <h3>The Company</h3>
                    <p>We are streamheavens! On a mission to entertain and keep people happy across the globe. We serve upcoming, trending movies and Tv shows to you all the way from heaven. Don't forget to add your favourite movie or show to your favourite list, so you can watch it again.</p>
                </div>     
                <Team />
            </section>
            <Footer />
        </main>
    </>
}


export default About;