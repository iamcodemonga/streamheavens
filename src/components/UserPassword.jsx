import React from 'react'

const UserPassword = () => {
  return (
        <div className="w-100 h-100 py-5 px-4 bg-dark" style={{borderRadius: 20}}>
            <div className="row">
                <div className="col">
                <form>
                    <div className="col-12"><img className="profile_dp" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt='profile_image' /></div>
                    <div className="col-12">
                    <div className="row g-0 mt-4">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Current Password</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" /></div>
                    </div>
                    <hr />
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">New Password</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" /></div>
                    </div>
                    <hr />
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Confirm Password</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="password" style={{border: '1px solid white'}} placeholder="xxxxxxxxx" autoComplete="off" /></div>
                    </div>
                    <hr />
                    </div><button className="btn btn-primary border-0" type="button">submit</button>
                </form>
                </div>
            </div>
        </div>
  )
}

export default UserPassword