import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="container RegisterForm">
    <div className="info">
      <h1> Register Form</h1>
    </div>
  <div className="form">
    <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>
    <form className="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
   
  </div>
  </div>
  );
}

export default Register;


