// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// main pages routes
import Home from "./pages/main/Home";
import Movies from "./pages/main/Movies";
import TvShows from "./pages/main/TvShows";
import Pricing from "./pages/main/Pricing";
import About from "./pages/main/About";
// authentification pages routes
// import Register from "./pages/auth/Register";
// import Login from "./pages/auth/Login";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import Reset from "./pages/auth/ResetPassword";
//  user profile routes
// import Profile from "./pages/user/Profile";
// import Details from "./components/UserDetails";
// import EditProfile from "./components/UserEdit";
// import Favourites from "./components/UserFavourites";
// import ChangePassword from "./components/UserPassword";
//others pages setup
// import Screen from "./pages/other/Screen";
//required packages and components
// import Loader from './components/Loaders/PageLoader'
// import { useSelector, useDispatch } from "react-redux";
// import { Navigate } from 'react-router-dom';
// import { fetchUser } from './features/authSlice';

function App() {

  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(fetchUser())
  // }, [dispatch])
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="tvshows" element={<TvShows/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="about" element={<About/>} />
          {/* <Route path="screen" element={<Screen/>} />
          <Route path="register" element={ <Register/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="forgotpassword" element={ <ForgotPassword/> } />
          <Route path="reset" element={ <Reset/> } /> */}
          {/* {auth.user ? <Route path=":id" element={ <Profile/> } >
              <Route index element={ <Details/> } />
              <Route path="favourites" element={ <Favourites/> } />
              <Route path="edit" element={ <EditProfile/> } />
              <Route path="password" element={ <ChangePassword/> } />
          </Route> : <Route path=":id" element={ <Navigate to='/' /> } >
              <Route index element={ <Navigate to='/' /> } />
              <Route path="favourites" element={ <Navigate to='/' /> } />
              <Route path="edit" element={ <Navigate to='/' /> } />
              <Route path="password" element={ <Navigate to='/' /> } />
          </Route>} */}
        </Routes>
      
    </div>
  );
}

export default App;
