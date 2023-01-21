import React from 'react'

const UserDetails = () => {
  return (
        <div className="w-100 h-100 py-5 px-4 bg-dark" style={{borderRadius: 20}}>
            <div className="row">
                <div className="col-12"><img className="profile_dp" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile_picture' /></div>
                <div className="col-12">
                <div className="row g-0 mt-4">
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0 text-white-50">Name</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <p className="mb-0">&nbsp;codemonga</p>
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
                    <p className="mb-0">codemonga@gmail.com</p>
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
                    <p className="mb-0">&nbsp;male</p>
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
                    <p className="mb-0">20-10-2022</p>
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
                    <p className="mb-0">&nbsp;nigeria</p>
                    </div>
                </div>
                <hr />
                </div>
            </div>
        </div>
  )
}

export default UserDetails