import { useEffect } from 'react';
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/HomeBanner';
import LatestMovies from '../../components/dataList/LatestMovies';
import TrendingMovies from '../../components/dataList/TrendingMovies';
import Carousel from '../../components/Banners/HomeCarousel';
import TVShows from '../../components/dataList/HomeShowList';
import Footer from '../../components/Footer';
import "../../assets/css/home.css";

const Home = () => {
    const handleSlide = () => {
        const movieContainers = [...document.querySelectorAll('.movie-container')];
        const nextbtn = [...document.querySelectorAll('.nextbtn')];
        const prevbtn = [...document.querySelectorAll('.prevbtn')];

        movieContainers.forEach((item, i) => {
            let containerDimentions = item.getBoundingClientRect();
            let containerWidth = containerDimentions.width;
            // let containerWidth = 390;
            
            nextbtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            });
            
            prevbtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            });
        });
    }

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
        handleSlide();
        handleSideBar();
    }, [])

    return <>
        <LeftBar />
        <main>
            <NavBar />
            <Banner />
            <section>
                <LatestMovies />
                <TrendingMovies />
                <Carousel />
                <TVShows />
            </section>
            <Footer />
        </main>
    </>
}

export default Home;