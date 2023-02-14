import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/authSlice'
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import BeatLoader from 'react-spinners/BeatLoader'

const RegisterForm = () => {

    const [ fullname, setFullname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ show, setShow ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AppRoot = process.env.REACT_APP_API_ROOT;

    const handleShowPassword = () => {
        if(show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const { data } = await axios.post(`${AppRoot}/auth/register`, { fullname, email, password }, { withCredentials: true });

            if (data.auth.status === 'failed') {
                setLoading(false);
                setErrorMessage(data.auth.message);
                setTimeout(() => {
                    setErrorMessage("");
                }, 2000);
                return;
            } else {
                setLoading(false);
                setErrorMessage('');
                setSuccessMessage(data.auth.message);
                setTimeout(() => {
                    dispatch(registerUser(data.user));
                    navigate("/")
                }, 2000);
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <h4 className="mt-0 mb-4 auth-heading text-center">CREATE ACCOUNT</h4>
            <div className="mb-3"><label className="form-label">Name</label><input className="form-control" type="text" placeholder="e.g john doe" onChange={(e) => setFullname(e.target.value)} /></div>
            <div className="mb-3"><label className="form-label">Email</label><input className="form-control" type="email" placeholder="e.g johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} /></div>
            <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">Password</label><button className="btn btn-sm text-light" type="button" onClick={handleShowPassword}>{show ? "hide" : "show"}</button></div>
                <input className="form-control" type={show ? "text" : "password"} placeholder="xxxxxxxxxx" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {loading ? <button className="btn btn-primary btn-lg w-100 mb-4 border-0 px-4" type="button" disabled><BeatLoader size={7} color={'#ffffff'} loading={loading} aria-label="Loading Spinner" data-testid="loader" /></button> : <button className="btn btn-primary btn-lg w-100 mb-4 border-0" type="submit">submit</button>}
            {errorMessage && <Alert show={true} variant="danger">{ errorMessage }</Alert>} 
            {successMessage && <Alert show={true} variant="success">{ successMessage }</Alert>}
            <div>
                <a className="btn btn-light w-100 mb-3 border-0 py-3 d-none" role="button" href={`${AppRoot}/auth/google`} rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-google me-3 mb-1">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>Signup with Google</a>
                <a className="btn btn-light w-100 mb-3 border-0 btn-fb d-none" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook me-3 mb-1">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>Signup with Facebook</a><a className="btn btn-light w-100 mb-3 border-0 btn-twitter d-none" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter me-3 mb-1">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>Signup with Twitter</a></div>
            <div className="row gx-3 gy-3 mb-3 d-none">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><a className="btn btn-light w-100 border-0" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-google me-3 mb-1">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>Google</a></div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><a className="btn btn-light w-100 border-0 btn-fb d-non" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook me-3 mb-1">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>Facebook</a><a className="btn btn-light w-100 border-0 btn-twitter d-none" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter me-3 mb-1">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>Twitter</a></div>
            </div>
            <div className="row gx-1 gy-2 mb-3 d-none">
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><a className="btn btn-light btn-sm w-100" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-google me-1 mb-1">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>google</a></div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><a className="btn btn-sm btn-fb w-100" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook mb-1 me-1">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>facebook</a></div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><a className="btn btn-sm btn-twitter w-100" role="button" href="google.com" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter me-1 mb-1">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>twitter</a></div>
            </div><Link to="/login" style={{fontSize: 14}}>Login instead!</Link>
        </form>
    )
}

export default RegisterForm;