import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Eva Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <Login />
    </div>
  );
}

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log in</h3>
        <div>
          <input type="text" placeholder="Username" className="infoInput" name="username" />
        </div>
        <div>
          <input type="text" placeholder="Password" className="infoInput" name="password" />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account. Sign up!</span>
        </div>

        <button className="button infoButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );

  function SignUp() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>
          <div>
            <input type="text" placeholder="First Name" className="infoInput" name="firstName" />
            <input type="text" placeholder="Last Name" className="infoInput" name="lastName" />
          </div>

          <div>
            <input type="text" placeholder="Username" className="infoInput" name="username" />
          </div>

          <div>
            <input type="text" placeholder="Password" className="infoInput" name="password" />
            <input type="text" placeholder="Confirm Password" className="infoInput" name="confirmpass" />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>Already have an account. Login!</span>
          </div>

          <button className="button infoButton" type="submit">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;
