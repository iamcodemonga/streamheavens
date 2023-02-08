import { useNavigate, NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LeftBar from '../../components/sidebars/ProfileBar';
import NavBar from '../../components/navbars/ProfileNav';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/authSlice';
import Footer from '../../components/Footer'

const Profile = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const { id } = useParams();

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

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
        navigate('/')
    }

    useEffect(() => {
        handleSideBar();
        if (id !== auth.user._id) navigate('/')
    }, [navigate, id, auth.user._id])

    return <>
        <LeftBar />
        <main id="profile_main">
            <NavBar user={auth.user && auth.user} />
            <section className="profile_section">
                <div className="container pt-1 px-md-4">
                    <div className="row gy-4 mb-5 mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                            <ul className="nav flex-column py-4 bg-dark px-3" id="profileNav">
                                <li className="nav-item"><NavLink className="nav-link" to="favourites">Favourites</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="edit">Edit account</NavLink></li>
                                {!auth.user.googleId && <li className="nav-item"><NavLink className="nav-link" to="password">Change Password</NavLink></li>}
                                <li className="nav-item"><NavLink className="nav-link" to="/logout" onClick={(e) => handleLogout(e)}>Logout</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    </>
}

export default Profile