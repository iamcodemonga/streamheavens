import "../../assets/css/home.css";
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/ShowsBanner';
import ShowGrid from '../../components/dataList/ShowList';
import Footer from '../../components/Footer'

const TVShows = () => {
    return <>
        <LeftBar />
        <main>
            <NavBar />
            <Banner />
            <section>
                <ShowGrid />
            </section>
            <Footer />
        </main>
    </>
}

export default TVShows;