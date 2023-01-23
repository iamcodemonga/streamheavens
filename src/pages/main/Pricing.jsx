import "../../assets/css/home.css";
// import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/PricingBanner';
import PriceList from '../../components/dataList/PriceList';
import Footer from '../../components/Footer'

const Pricing = () => {

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
                    <h3>Choose a package</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                    <PriceList />
                </div>
            </section>
            <Footer />
        </main>
    </>
}

export default Pricing;