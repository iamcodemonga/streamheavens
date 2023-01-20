import React from 'react'

const UserEdit = () => {
  return (
        <div className="w-100 h-100 py-5 px-4 bg-dark d-none" style={{borderRadius: 20}}>
            <div className="row">
                <div className="col">
                <form>
                    <div className="col-12"><img className="profile_dp" src="https://images.pexels.com/photos/12771773/pexels-photo-12771773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile_image' /></div>
                    <div className="col-12">
                    <div className="row g-0 mt-4">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Profile picture</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><input className="form-control" type="file" /></div>
                    </div>
                    <hr />
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Name</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="text" style={{border: '1px solid white'}} placeholder="e.g john doe" defaultValue="codemonga" /></div>
                    </div>
                    <hr />
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Email</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" type="email" style={{border: '1px solid white'}} placeholder="e.g johndoe@gmail.com" defaultValue="codemonga@gmail.com" /></div>
                    </div>
                    <hr />
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Gender</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><select className="form-select form-control py-2" style={{border: '1px solid white'}}>
                            <optgroup label="What's your gender">
                            <option value="male" selected>Male</option>
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
                        <div className="col-sm-12 col-md-6"><input className="form-control form-control py-2" style={{border: '1px solid white'}} type="date" /></div>
                    </div>
                    <hr />
                    </div>
                    <div className="col-12">
                    <div className="row g-0">
                        <div className="col-sm-12 col-md-6">
                        <p className="mb-0 text-white-50">Country</p>
                        </div>
                        <div className="col-sm-12 col-md-6"><select className="form-select form-control py-2" style={{border: '1px solid white'}}>
                            <optgroup label="Select your country">
                            <option value="nigeria" selected>Nigeria</option>
                            <option value="USA">United States Of America</option>
                            <option value="canada">Canada</option>
                            </optgroup>
                        </select></div>
                    </div>
                    <hr />
                    </div><button className="btn btn-primary" type="button">submit</button>
                </form>
                </div>
            </div>
        </div>
  )
}

export default UserEdit