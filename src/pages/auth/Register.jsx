import "../../assets/css/auth.css";
import "../../assets/css/account.css";
import { useEffect } from "react";
import LeftBar from '../../components/sidebars/AuthBar';
import NavBar from '../../components/navbars/AuthNav';
import Form from '../../components/forms/RegisterForm'

const Register = () => {

    const handleSideBar = () => {
        const profile_menubar = document.querySelector('.profile_menubar');
        const profilebar_close = document.querySelector('.profilebar_close');
        const leftbar = document.querySelector('#leftbar');
        const profile_navlist = document.querySelector('.profile_navlist');

        profile_menubar.addEventListener('click', () => {
            leftbar.style.width = '100%';
            profile_navlist.style.opacity = '1';
        });

        profilebar_close.addEventListener('click', () => {
            profile_navlist.style.opacity = '0';
            leftbar.style.width = '0';
        });
    }

    useEffect(() => {
        handleSideBar();
    }, [])

    return <>
        <LeftBar />
        <section className="vh-100 w-100 position-relative"><img src="https://onesheetdesign.com/wp-content/uploads/movie_poster_design.jpg" width="100%" height="100%" style={{objectFit: 'cover'}} alt="authBackground_image" />
            <div className="h-100 w-100 position-absolute auth-overlay d-flex justify-content-center align-items-center">
                <NavBar />
                <Form />
            </div>
        </section>
    </>
}

export default Register
