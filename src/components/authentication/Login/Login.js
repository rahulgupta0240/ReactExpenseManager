import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="container LoginForm">
    <div className="info">
      <h1> Login Form</h1>
    </div>
  <div className="form">
    <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>
    
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
  </div>
  );
}

export default Login;


