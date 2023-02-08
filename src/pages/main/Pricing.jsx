import "../../assets/css/home.css";
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
                    <p>Our pricing plans are created to meet up your cinematic criteria, you choose a pricing plan depending on your status! Are you single, married or you just wanna chill with your date? We gat you! </p>
                    <PriceList />
                </div>
            </section>
            <Footer />
        </main>
    </>
}

export default Pricing;