import "../../assets/css/home.css"
// import { NavLink, Link } from 'react-router-dom';
import LeftBar from '../../components/sidebars/MainBar';
import NavBar from '../../components/navbars/MainNav';
import Banner from '../../components/Banners/AboutBanner';
import Team from '../../components/dataList/Team';
import Footer from '../../components/Footer'

const About = () => {
    return <>
        <LeftBar />
        <main>
            <NavBar />
            <Banner />
            <section>
                <div className="container-fluid pt-1 px-md-4">
                    <h3>The Company</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                </div>     
                <Team />
            </section>
            <Footer />
        </main>
    </>
}


export default About;