import "../../assets/css/home.css";
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/MoviesBanner';
import MovieGrid from '../../components/dataList/MovieList';
import Footer from '../../components/Footer'

const Movies = () => {
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