import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  // admin credentials
  const adminEmail = "admin@gmail.com";
  const adminPassword = "password";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      alert("Welcome Admin!");
      navigate('/home');
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>By signing in you are agreeing to our <span>Terms and privacy policy</span></p>

      <div className="login-tabs">
        <span className="active-tab">Login</span>
        <span>Register</span>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-field">
          <input
            type="password"
            placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <span className="password-toggle">👁️</span>
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember password
          </label>
          <a href="#">Forget password</a>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="social-login">
        <p>Or connect with</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
          <FaLinkedinIn />
        </div>
      </div>

      <div className="fingerprint">
        <span>🔒</span>
      </div>
    </div>
  );
}

export default Login;
