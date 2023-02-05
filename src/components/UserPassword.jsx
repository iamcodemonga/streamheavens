import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const UserPassword = () => {

    const user = useSelector((state) => state.auth.user);
    const [ password, setPassword ] = useState({oldPassword: "", newPassword: "", confirmedPassword: ""});
    const [ status, setStatus ] = useState({ error: false, message: ""});
    const [ loading, setLoading ] = useState(false)
    const AppRoot = "http://localhost:5005";

    const handlePassword = async(e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { data } = await axios.put("http://localhost:5005/password/change/63d9106156c9c10ab15982ec", password);
            if (data.message.status === "failed") {
                console.log(data)
                setLoading(false)
                setStatus((prev) => { return {...prev, error: true, message: data.message.message} })
                setTimeout(() => {
                    setStatus({...status, error: null, message: ""})
                }, 2000)
                return;
            } else {
                setLoading(false)
                setStatus((prev) => { return {...prev, error: false, message: data.message.message} }) 
                // setPassword((prev) => { return {...prev, oldPassword: "", newPassword: "", confirmedPassword: ""}});
                setTimeout(() => {
                    setStatus({...status, error: null, message: ""});
                }, 3000)
                return;
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
            <div className="w-100 h-100 py-5 px-4 bg-dark" style={{borderRadius: 20}}>
                <div className="row">
                    <div className="col">
                    <form onSubmit={handlePassword}>
                        <div className="col-12"><img className="profile_dp" src={user ? user.dp ? `${AppRoot}/${user.dp}` :"https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png": "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"}  alt='profile_image' /></div>
                        <div className="col-12">
                        <div className="row g-0 mt-4">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Current Password</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" onChange={(e) => setPassword({...password, oldPassword: e.target.value})} /></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">New Password</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" onChange={(e) => setPassword({...password, newPassword: e.target.value})} /></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                            <div className="row g-0">
                                <div className="col-sm-12 col-md-6">
                                    <p className="mb-0 text-white-50">Confirm Password</p>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" onChange={(e) => setPassword({...password, confirmedPassword: e.target.value})} />
                                </div>
                            </div>
                            <hr />
                        </div>
                        {loading ? <button className="btn btn-primary border-0 mb-4" type="submit" disabled><img src='/streamloader.svg'  alt='loader' style={{width: '30px'}}/></button> : <button className="btn btn-primary border-0 mb-4" type="submit">submit</button>}
                        {status.error ? status.message && <Alert show={true} variant="danger">{ status.message }</Alert> : status.message &&<Alert show={true} variant="success">{ status.message }</Alert>}
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default UserPassword