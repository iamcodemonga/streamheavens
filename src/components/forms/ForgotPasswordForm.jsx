import React from 'react';

const ForgotPasswordForm = () => {
  return (
    <form className="auth-form">
        <h4 className="mt-0 mb-2">FORGOT PASSWORD?</h4>
        <p>We will send a reset link to your email.</p>
        <div className="mb-3">
            <label className="form-label">email</label>
            <input className="form-control" type="email" placeholder="e.g johndoe@gmail.com" />
        </div>
        <button className="btn btn-primary btn-lg w-100 mb-4 border-0" type="button">submit</button>
    </form>
  )
}

export default ForgotPasswordForm