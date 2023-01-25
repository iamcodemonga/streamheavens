import "../../assets/css/home.css";
import { useEffect } from "react";
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/MoviesBanner';
import MovieGrid from '../../components/dataList/MovieList';
import Footer from '../../components/Footer'

const Movies = () => {

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
                <MovieGrid />
            </section>
            <Footer />
        </main>
    </>
}

export default Movies;