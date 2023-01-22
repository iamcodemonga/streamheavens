import React from 'react';

const ResetForm = () => {
  return (
    <form className="auth-form">
        <h4 className="mt-0 mb-4 auth-heading">RESET PASSWORD!</h4>
        <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">New Password</label><button className="btn btn-sm text-light" type="button">show</button></div><input className="form-control" type="password" placeholder="xxxxxxxxxx" autoComplete="off" />
        </div>
        <div className="mb-4">
        <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">Confirm Password</label><button className="btn btn-sm text-light" type="button">show</button></div><input className="form-control" type="password" placeholder="xxxxxxxxxx" autoComplete="off" />
        </div><button className="btn btn-primary btn-lg w-100 mb-4 border-0" type="button">submit</button>
    </form>
  )
}

export default ResetForm