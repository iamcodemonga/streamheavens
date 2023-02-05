import { useSelector } from 'react-redux'

const UserDetails = () => {

    const user = useSelector((state) => state.auth.user);
    const AppRoot = "http://localhost:5005";

  return (
        <div className="w-100 h-100 py-5 px-4 bg-dark" style={{borderRadius: 20}}>
            <div className="row">
                <div className="col-12"><img className="profile_dp" src={user ? user.dp ? `${AppRoot}/${user.dp}` :"https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png": "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"} alt='profile_picture' /></div>
                <div className="col-12">
                <div className="row g-0 mt-4">
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0 text-white-50">Name</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0">{user ? user.fullname ? user.fullname : "none" : "_____   ______"}</p>
                    </div>
                </div>
                <hr />
                </div>
                <div className="col-12">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0 text-white-50">Email</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0">{user ? user.email ? user.email : "none" : "____________"}</p>
                    </div>
                </div>
                <hr />
                </div>
                <div className="col-12">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0 text-white-50">Gender</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0">{user ? user.gender ? user.gender : "none" : "____"}</p>
                    </div>
                </div>
                <hr />
                </div>
                <div className="col-12">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0 text-white-50">Date Of Birth</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0">{user ? user.birthday ? user.birthday : "none" : "_______"}</p>
                    </div>
                </div>
                <hr />
                </div>
                <div className="col-12">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0 text-white-50">Country</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0">{user ? user.country ? user.country : "none" :  "____"}</p>
                    </div>
                </div>
                <hr />
                </div>
            </div>
        </div>
  )
}

export default UserDetails