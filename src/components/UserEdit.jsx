import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/authSlice';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const UserEdit = () => {

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    // const [ newUser, setNewUser ] = useState({ dp: (user.dp && user.dp) , fullname: user.fullname, email: user.email, gender: user.gender, birthday: user.birthday, country: user.country});
    const [ dp, setDp ] = useState(user.dp ? user.dp : "");
    const [dpURL, setDpURL] = useState("")
    const [ fullname, setFullname ] = useState(user.fullname);
    const [ email, setEmail ] = useState(user.email);
    const [ gender, setGender ] = useState(user.gender ? user.gender : "others");
    const [ birthday, setBirthday ] = useState(user.birthday);
    const [ country, setCountry ] = useState(user.country ? user.country : "nigeria");
    const [ loading, setLoading ] = useState(false);
    const [ status, setStatus ] = useState({ error: false, message: ""});
    const AppRoot = "http://localhost:5005";

    // const handleFileUpload

    const handleInfoUpdate = async() => {

        try{
            let { data } = await axios.put(`${AppRoot}/edit/${user._id}/`, { dp: "", fullname, email, gender, birthday, country });

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
                dispatch(fetchUser())
                setTimeout(() => {
                    setStatus({...status, error: null, message: ""})
                }, 2000)
                return;
            }
        } catch(error) {
            console.log(error)
        }

    }

    const handleUser = async(e) => {

        e.preventDefault();
        setLoading(true)
        console.log({ dp, fullname, email, gender, birthday, country })
        if (dp && dp !== user.dp) {     

            const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];

            if (!dp || !allowedTypes.includes(dp.type)) {
                setLoading(false)
                setStatus((prev) => { return {...prev, error: true, message: "Image type not supported!"} });
                setTimeout(() => {
                    setStatus({...status, error: null, message: ""})
                }, 2000)
                console.log(dp.type)
                return;
            }

            if (!dp || dp.size > 200000) {
                setLoading(false)
                setStatus((prev) => { return {...prev, error: true, message: "Photo size too large!"} })
                setTimeout(() => {
                    setStatus({...status, error: null, message: ""})
                }, 2000)
                console.log(dp.size)
                return;
            }

            const ext = dp.name.split('.').pop();
            const formData = new FormData();
            let filename = `${user._id}_${Date.now()}.${ext}`;
            formData.append("name", filename);
            formData.append("dp", dp);

            try{
                // let { data } = await axios.put(`${AppRoot}/edit/${user._id}/`, { dp: "", fullname, email, gender, birthday, country });
                let { data } = await axios.put(`${AppRoot}/edit/${user._id}/`, { dp: filename, fullname, email, gender, birthday, country });
                // let response = await axios.all([updateDp, updateUser])

                if (data.message.status === "failed") {
                    console.log(data)
                    setLoading(false)
                    setStatus((prev) => { return {...prev, error: true, message: data.message.message} })
                    setTimeout(() => {
                        setStatus({...status, error: null, message: ""})
                    }, 2000)
                    return;
                } else {

                    let { data } = await axios.post(`${AppRoot}/upload/dp/`, formData );

                    if (data.message === "image uploaded successfully") {
                        setLoading(false)
                        setStatus((prev) => { return {...prev, error: false, message: "Profile updated successfully!"} }) 
                        dispatch(fetchUser())
                        setTimeout(() => {
                            setStatus({...status, error: null, message: ""})
                        }, 2000)
                        return;
                    }

                }
            } catch(error) {
                console.log(error)
            }
            
        } else {
            handleInfoUpdate();
        }
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setDp(e.target.files[0])
                setDpURL(reader.result)
                console.log(dp.type)
                // setDp(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        // !dpURL ? dp ? "dp": "template" : "dpUrl"
    }

    return (
            <div className="w-100 h-100 py-5 px-4 bg-dark" style={{borderRadius: 20}}>
                <div className="row">
                    <div className="col">
                    <form onSubmit={handleUser}>
                        {/* <div className="col-12"><img className="profile_dp" src={!dp ? dpURL ? dpURL : "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"  : `${AppRoot}/${dp}`} alt='profile_image' /></div> */}
                        <div className="col-12"><img className="profile_dp" src={!dpURL ? dp ? `${AppRoot}/${dp}` : "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" : dpURL} alt='profile_image' /></div>
                        {/* <div className="col-12"><img className="profile_dp" src={!dp ? "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" : `${AppRoot}/${dp}`} alt='profile_image' /></div> */}
                        <div className="col-12">
                        <div className="row g-0 mt-4">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Profile picture</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><input className="form-control" type="file" onChange={imageHandler} name="dp" /></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Name</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="text" style={{border: '1px solid white'}} placeholder="e.g john doe" value={fullname} onChange={(e)  => { setFullname(e.target.value); console.log(fullname);}} /></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Email</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="email" style={{border: '1px solid white'}} placeholder="e.g johndoe@gmail.com" value={email} onChange={(e)  => { setEmail(e.target.value);console.log(email)}} /></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Gender</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><select className="form-select form-control py-2" style={{border: '1px solid white'}} value={gender} onChange={(e)  => { setGender(e.target.value);console.log(gender);}} >
                                <optgroup label="What's your gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                                </optgroup>
                            </select></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Date Of Birth</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" style={{border: '1px solid white'}} type="date" value={birthday} onChange={(e)  => { setBirthday(e.target.value); console.log(birthday);}} /></div>
                        </div>
                        <hr />
                        </div>
                        <div className="col-12">
                        <div className="row g-0">
                            <div className="col-sm-12 col-md-6">
                            <p className="mb-0 text-white-50">Country</p>
                            </div>
                            <div className="col-sm-12 col-md-6"><select className="form-select form-control py-2" style={{border: '1px solid white'}} value={country} onChange={(e)  => { setCountry(e.target.value); console.log(country);}}>
                                <optgroup label="Select your country">
                                    <option value="nigeria">Nigeria</option>
                                    <option value="USA">United States Of America</option>
                                    <option value="canada">Canada</option>
                                </optgroup>
                            </select></div>
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

export default UserEdit