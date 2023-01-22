import { NavLink, Outlet, useParams } from 'react-router-dom';
import LeftBar from '../../components/sidebars/ProfileBar';
import NavBar from '../../components/navbars/ProfileNav';
import Footer from '../../components/Footer'

const Profile = () => {

    const { id } = useParams();

    return <>
        <LeftBar />
        <main id="profile_main">
            <NavBar userid={id} />
            <section className="profile_section">
                <div className="container pt-1 px-md-4">
                    <div className="row gy-4 mb-5 mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                            <ul className="nav flex-column py-4 bg-dark px-3" id="profileNav">
                                {/* <li className="nav-item"><NavLink className="nav-link" to={"/"+id}>About me</NavLink></li> */}
                                <li className="nav-item"><NavLink className="nav-link" to="favourites">Favourites</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="edit">Edit account</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="password">Change Password</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
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