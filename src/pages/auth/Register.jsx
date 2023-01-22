import "../../assets/css/auth.css";
import "../../assets/css/account.css";
import LeftBar from '../../components/sidebars/AuthBar';
import NavBar from '../../components/navbars/AuthNav';
import Form from '../../components/forms/RegisterForm'

const Register = () => {
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
